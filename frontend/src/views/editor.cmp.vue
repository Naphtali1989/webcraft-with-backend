<template>
    <section class="editor-container flex column" :class="hideEditor">
        <editor-dashboard :class="hideEditor" :samples="samples" :cmpToEdit="currCmpToEdit" @pickedSample="pickSample" @updated="updateCmpToShow" @switched="emptyCmpToEdit">
            <slot>
                <toggle-editor class="toggle-dashboard" :isEditorShow="this.isEditorShow" @toggled="toggleEditor" />
            </slot>
        </editor-dashboard>
        <section class="flex column">
            <user-controls @saveWap="saveWap" />
            <editor-workspace v-if="currWap" @droppedSample="pickSample" :cmps="currWap.cmps" @clicked="setCmpToEdit" @updatedTxt="updateTxt" @copy="copySection" @delete="deleteSection" @moveSection="moveSection" @droppedSection="dropSection" />
        </section>
    </section>
</template>

<script>
import editorDashboard from '@/cmps/editor/editor-dashboard.cmp.vue';
import editorWorkspace from '@/cmps/editor/editor-workspace.cmp.vue';
import userControls from '@/cmps/editor/user-controls.cmp.vue';
import toggleEditor from '@/cmps/custum-cmps/toggle-editor.cmp.vue';
import { utilService } from "@/services/util.service";


export default {
    name: "editor",
    data() {
        return {
            currWap: null,
            currCmpToEdit: null,
            isEditorShow: true,
        };
    },
    computed: {
        hideEditor() {
            return { 'hide-editor': !this.isEditorShow };
        },
        samples() {
            return this.$store.getters.sampleList;
        },
    },
    components: {
        editorDashboard,
        editorWorkspace,
        userControls,
        toggleEditor
    },
    methods: {
        async saveWap() {
            this.currWap=await this.$store.dispatch({
                type: 'saveWap',
                wap: this.currWap
            })
        },
        findByIdRecursive(nodes,_id) {
            for(let i=0;i<nodes.length;i++) {
                const child=nodes[i];
                if(child._id===_id) {
                    return child;
                } else {
                    if(child.children) {
                        const found=this.findByIdRecursive(child.children,_id);
                        if(found) {
                            return found;
                        }
                    }
                }
            }
        },
        replaceIds(node) {
            node._id=utilService.makeId();
            if(node.children) {
                node.children.forEach((child) => {
                    this.replaceIds(child);
                });
            }
        },
        setCmpToEdit(_id) {
            var cmpToEdit=this.findByIdRecursive(this.currWap.cmps,_id);
            this.currCmpToEdit=cmpToEdit;
        },
        updateCmpToShow(updatedCmp) {
            this.currCmpToEdit=updatedCmp;
        },
        updateTxt(txtValue) {
            this.currCmpToEdit.txt=txtValue;
        },
        toggleEditor() {
            console.log('imhere')
            this.isEditorShow=!this.isEditorShow;
        },
        copySection(_id) {
            const section=this.currWap.cmps.find((cmp) => cmp._id===_id);
            const cmp=JSON.parse(JSON.stringify(section));
            this.replaceIds(cmp);
            const idx=this.currWap.cmps.findIndex((cmp) => cmp._id===_id);
            this.currWap.cmps.splice(idx,0,cmp);
        },
        dropSection(dragResult) {
            this.currWap.cmps=utilService.applyDrag(this.currWap.cmps,dragResult);
        },
        deleteSection(_id) {
            const idx=this.currWap.cmps.findIndex((cmp) => cmp._id===_id);
            this.currWap.cmps.splice(idx,1);
        },
        moveSection(_id,diff) {
            const section=this.currWap.cmps.find((cmp) => cmp._id===_id);
            const idx=this.currWap.cmps.findIndex((cmp) => cmp._id===_id);
            if(idx===0&&diff===-1) return;
            this.currWap.cmps.splice(idx,1);
            this.currWap.cmps.splice(idx+diff,0,section);
        },
        emptyCmpToEdit() {
            this.currCmpToEdit=null;
        },
        async pickSample(_id,idx) {
            const res=await this.$store.dispatch({
                type: 'pickedSample',
                _id,
            });
            let sample=JSON.parse(JSON.stringify(res));
            //replace the ids of sample in order to differ from section to section
            this.replaceIds(sample);
            const dragResult={
                payload: sample,
                addedIndex: idx,
                removedIndex: null,
            };
            this.dropSection(dragResult);
        },
    },
    async created() {
        //load sample for type list
        await this.$store.dispatch({ type: 'loadSamples' });
        const _id=this.$route.params.id;
        if(_id) {
            const wap=await this.$store.dispatch({ type: 'loadWap',_id })
            this.currWap=wap;
        }
        else {
            this.currWap={
                name: '',cmps: [
                    // here it starts
                    {
                        name: "section",
                        type: "video",
                        class: "video-card",
                        thumbnail: 'https://imagizer.imageshack.com/img922/7981/WgIDFl.png',
                        style: {
                            background: "transparent",
                            borderRadius: "0px",
                            display: 'grid',
                            gridTemplateColumns: 'repeat(12, minmax(auto, 300px))',
                            gridColumn: '2 / span 12',
                            gridGap: '40px'
                        },
                        imgUrl: '',
                        children: [
                            {
                                _id: "xn50tooepx",
                                name: "div",
                                type: "card-div",
                                class: "card flex column",
                                style: {
                                    gridColumnEnd: 'span 4',
                                    borderRadius: '0px',
                                    background: "",
                                },

                                children: [{
                                    _id: "vnb3tubivs",
                                    name: 'iframe',
                                    vidUrl: 'https://www.youtube.com/watch?v=qJf8N46OEMk',
                                    style: {
                                        background: '',
                                        width: '100%',
                                        height: '100%',
                                        height: "230px",
                                        overflow: 'hidden',
                                        position: 'relative',

                                    },
                                    frameborder: "0",
                                    allowfullscreen: "allowfullscreen",
                                    children: [{
                                        _id: "vvlb93hww7",
                                        name: 'img',
                                        class: 'avatar-img',
                                        imgUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80',
                                        style: {
                                            position: 'absolute',
                                            width: "100%",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)"
                                        },
                                    }]
                                },
                                {
                                    _id: "lwjp5shaov",
                                    name: 'div',
                                    style: {
                                        background: '',
                                        padding: "35px",
                                    },
                                    children: [{
                                        _id: "3llf3wiqii",
                                        name: 'txt',
                                        marginBottom: "20px",
                                        txt: 'This is an awesome card',
                                        style: {
                                            fontSize: "16px",
                                            lineHeight: "25px",
                                            fontWeight: "400",
                                            color: "#ecf0f1"
                                        }
                                    },
                                    {
                                        _id: "4xb16ruz1i",
                                        name: 'div',
                                        class: 'flex align-center',
                                        style: {
                                            alignSelf: 'end',
                                        },
                                        children: [
                                            {
                                                _id: "odwpathhr2",
                                                name: 'txt',
                                                txt: '30 Min',
                                                style: {
                                                    fontSize: '16px',
                                                    lineHeight: '20px',
                                                    fontWeight: "400px",
                                                    color: "#ecf0f1",
                                                    "letterSpacing": "",
                                                    "textDecoration": "",
                                                    "fontStyle": "",
                                                    "textAlign": "",
                                                    "fontFamily": "carme"
                                                }

                                            },
                                            {
                                                _id: "lyowt49vlg",
                                                name: 'txt',
                                                txt: 'Free',
                                                style: {
                                                    marginLeft: 'auto',
                                                    padding: "5px 20px",
                                                    borderRadius: "20px",
                                                    backgroundColor: '#303032',
                                                    fontSize: '16px',
                                                    lineHeight: '20px',
                                                    fontWeight: "400px",
                                                    color: "#ecf0f1",
                                                    "letterSpacing": "",
                                                    "textDecoration": "",
                                                    "fontStyle": "",
                                                    "textAlign": "",
                                                    "fontFamily": "carme"
                                                }
                                            }
                                        ]
                                    }
                                    ]
                                }
                                ],


                            },
                        ]

                    }





                    // here it ends
                ]
            }
        }
    }
}
</script>

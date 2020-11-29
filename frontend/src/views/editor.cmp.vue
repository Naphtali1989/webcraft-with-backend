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
                name: '',
                cmps: [
                    {
                        _id: Math.random().toString(36).substring(2,12),
                        name: 'section',
                        type: 'footer',
                        class: 'flex space-around',
                        style: {
                            background: 'rgb(22, 22, 22)',
                            borderRadius: '0px',
                            width: '100%',
                            padding: '3rem 1rem',


                        },
                        children: [
                            {

                                _id: Math.random().toString(36).substring(2,12),
                                name: 'div',
                                style: {
                                    background: '',
                                    borderRadius: '0px',
                                    display: 'flex',
                                },
                                children:
                                    [
                                        {
                                            _id: Math.random().toString(36).substring(2,12),
                                            name: 'div',
                                            class: 'flex column align-center',
                                            style: {
                                                background: '',
                                                borderRadius: '0px'
                                            },
                                            children:
                                                [
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 1",
                                                        style: {
                                                            fontSize: "20px",
                                                            letterSpacing: '1px',
                                                            fontWeight: 'bold',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            lineHeight: "1.5",
                                                            textDecoration: "",
                                                            fontStyle: "",
                                                            textAlign: "",
                                                            fontFamily: "",
                                                            color: '#fff'
                                                        }
                                                    },
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 2",
                                                        style: {
                                                            fontSize: "14px",
                                                            letterSpacing: '1px',
                                                            fontWeight: '600px',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            lineHeight: "",
                                                            textDecoration: "",
                                                            fontStyle: "",
                                                            textAlign: "",
                                                            fontFamily: "",
                                                            color: '#fff'
                                                        }
                                                    },
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 3",
                                                        style: {
                                                            "fontSize": "14px",
                                                            letterSpacing: '1px',
                                                            fontWeight: '600px',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            "lineHeight": "",
                                                            "textDecoration": "",
                                                            "fontStyle": "",
                                                            "textAlign": "",
                                                            "fontFamily": "",
                                                            color: '#fff'
                                                        }
                                                    },
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 4",
                                                        style: {
                                                            "fontSize": "14px",
                                                            letterSpacing: '1px',
                                                            fontWeight: '600px',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            "lineHeight": "",
                                                            "textDecoration": "",
                                                            "fontStyle": "",
                                                            "textAlign": "",
                                                            "fontFamily": "",
                                                            color: '#fff'
                                                        }
                                                    },

                                                ]
                                        },
                                        {
                                            _id: Math.random().toString(36).substring(2,12),
                                            name: 'div',
                                            class: 'flex column align-center',
                                            style: {
                                                background: '',
                                                borderRadius: '0px'
                                            },
                                            children:
                                                [
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 1",
                                                        style: {
                                                            fontSize: "1.25rem",
                                                            letterSpacing: '1px',
                                                            fontWeight: 'bold',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            lineHeight: "1.5",
                                                            textDecoration: "",
                                                            fontStyle: "",
                                                            textAlign: "",
                                                            fontFamily: "",
                                                            color: '#fff'
                                                        }
                                                    },
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 2",
                                                        style: {
                                                            fontSize: "14px",
                                                            letterSpacing: '1px',
                                                            fontWeight: '600px',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            lineHeight: "",
                                                            textDecoration: "",
                                                            fontStyle: "",
                                                            textAlign: "",
                                                            fontFamily: "",
                                                            color: '#fff'
                                                        }
                                                    },
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 3",
                                                        style: {
                                                            "fontSize": "14px",
                                                            letterSpacing: '1px',
                                                            fontWeight: '600px',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            "lineHeight": "",
                                                            "textDecoration": "",
                                                            "fontStyle": "",
                                                            "textAlign": "",
                                                            "fontFamily": "",
                                                            color: '#fff'
                                                        }
                                                    },
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 4",
                                                        style: {
                                                            "fontSize": "14px",
                                                            letterSpacing: '1px',
                                                            fontWeight: '600px',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            "lineHeight": "",
                                                            "textDecoration": "",
                                                            "fontStyle": "",
                                                            "textAlign": "",
                                                            "fontFamily": "",
                                                            color: '#fff'
                                                        }
                                                    },

                                                ]
                                        },
                                        {
                                            _id: Math.random().toString(36).substring(2,12),
                                            name: 'div',
                                            class: 'flex column align-center',
                                            style: {
                                                background: '',
                                                borderRadius: '0px'
                                            },
                                            children:
                                                [
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 1",
                                                        style: {
                                                            fontSize: "20px",
                                                            letterSpacing: '1px',
                                                            fontWeight: 'bold',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            lineHeight: "1.5",
                                                            textDecoration: "",
                                                            fontStyle: "",
                                                            textAlign: "",
                                                            fontFamily: "",
                                                            color: '#fff'
                                                        }
                                                    },
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 2",
                                                        style: {
                                                            fontSize: "14px",
                                                            letterSpacing: '1px',
                                                            fontWeight: '600px',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            lineHeight: "",
                                                            textDecoration: "",
                                                            fontStyle: "",
                                                            textAlign: "",
                                                            fontFamily: "",
                                                            color: '#fff'
                                                        }
                                                    },
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 3",
                                                        style: {
                                                            "fontSize": "14px",
                                                            letterSpacing: '1px',
                                                            fontWeight: '600px',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            "lineHeight": "",
                                                            "textDecoration": "",
                                                            "fontStyle": "",
                                                            "textAlign": "",
                                                            "fontFamily": "",
                                                            color: '#fff'
                                                        }
                                                    },
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 4",
                                                        style: {
                                                            "fontSize": "14px",
                                                            letterSpacing: '1px',
                                                            fontWeight: '600px',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            "lineHeight": "",
                                                            "textDecoration": "",
                                                            "fontStyle": "",
                                                            "textAlign": "",
                                                            "fontFamily": "",
                                                            color: '#fff'
                                                        }
                                                    },

                                                ]
                                        },
                                        {
                                            _id: Math.random().toString(36).substring(2,12),
                                            name: 'div',
                                            class: 'flex column align-center',
                                            style: {
                                                background: '',
                                                borderRadius: '0px'
                                            },
                                            children:
                                                [
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 1",
                                                        style: {
                                                            fontSize: "20px",
                                                            letterSpacing: '1px',
                                                            fontWeight: 'bold',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            lineHeight: "1.5",
                                                            textDecoration: "",
                                                            fontStyle: "",
                                                            textAlign: "",
                                                            fontFamily: "",
                                                            color: '#fff'
                                                        }
                                                    },
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 2",
                                                        style: {
                                                            fontSize: "14px",
                                                            letterSpacing: '1px',
                                                            fontWeight: '600px',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            lineHeight: "",
                                                            textDecoration: "",
                                                            fontStyle: "",
                                                            textAlign: "",
                                                            fontFamily: "",
                                                            color: '#fff'
                                                        }
                                                    },
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 3",
                                                        style: {
                                                            fontSize: "14px",
                                                            letterSpacing: '1px',
                                                            fontWeight: '600px',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            "lineHeight": "",
                                                            "textDecoration": "",
                                                            "fontStyle": "",
                                                            "textAlign": "",
                                                            "fontFamily": "",
                                                            color: '#fff'
                                                        }
                                                    },
                                                    {
                                                        id: Math.random().toString(36).substring(2,12),
                                                        name: 'txt',
                                                        txt: "Item 4",
                                                        style: {
                                                            fontSize: "14px",
                                                            letterSpacing: '1px',
                                                            fontWeight: '600px',
                                                            background: '',
                                                            padding: '12px 40px',
                                                            border: 'none',
                                                            lineHeight: "",
                                                            textDecoration: "",
                                                            fontStyle: "",
                                                            textAlign: "",
                                                            fontFamily: "",
                                                            color: '#fff'
                                                        }
                                                    },

                                                ]
                                        }
                                    ]

                            }
                        ]
                    }
                    // //start here
                    // {
                    //     type: 'section',
                    //     class: 'gallery-slider flex column align-center',
                    //     name: 'section',
                    //     thumbnail: 'https://imagizer.imageshack.com/img922/37/Gy8un8.png',
                    //     style: {
                    //         background: "transparent",
                    //         borderRadius: "0px",
                    //         //figure out height
                    //         height: '500px'
                    //     },
                    //     //HEADER + H1  + P
                    //     children: [{
                    //         _id: Math.random().toString(36).substring(2,12),
                    //         name: 'div',
                    //         class: 'flex column align-center',
                    //         style: {
                    //             background: "transparent",
                    //             borderRadius: "0px",
                    //         },
                    //         children: [
                    //             {
                    //                 id: Math.random().toString(36).substring(2,12),
                    //                 name: 'txt',
                    //                 txt: "Special Menu",
                    //                 style: {
                    //                     "fontSize": "28px",
                    //                     "fontWeight": "600",
                    //                     "marginBlockStart": "",
                    //                     "lineHeight": "2",
                    //                     "letterSpacing": "",
                    //                     "backgroundColor": "transparent",
                    //                     "textDecoration": "",
                    //                     "fontStyle": "",
                    //                     "textAlign": "",
                    //                     "fontFamily": "",
                    //                     "color": '#010101',
                    //                 }
                    //             },
                    //             {
                    //                 id: Math.random().toString(36).substring(2,12),
                    //                 name: 'txt',
                    //                 txt: "Lorem Ipsum is simply dummy text of the printing and typesetting",
                    //                 style: {
                    //                     "fontSize": "18px",
                    //                     "fontWeight": "200",
                    //                     "lineHeight": "3",
                    //                     "letterSpacing": "",
                    //                     "backgroundColor": "transparent",
                    //                     "textDecoration": "",
                    //                     "fontStyle": "",
                    //                     "textAlign": "",
                    //                     "fontFamily": "",
                    //                     "color": '#010101'
                    //                 }
                    //             }
                    //         ]

                    //     },
                    //     {
                    //         //START NAV
                    //         _id: Math.random().toString(36).substring(2,12),
                    //         name: "div",
                    //         type: 'nav-section',
                    //         class: 'flex align-center',
                    //         style: {
                    //             background: '',
                    //             borderRadius: '4px',
                    //             border: '1px solid #e4e4e4',
                    //             margin: '10px 15px',
                    //         },
                    //         //NAV UL
                    //         children:
                    //             [
                    //                 {
                    //                     id: Math.random().toString(36).substring(2,12),
                    //                     name: 'txt',
                    //                     txt: "ALL",
                    //                     style: {
                    //                         boxShadow: '2px 20px 45px 5px rgba(0,0,0,.2)',
                    //                         "fontSize": "14px",
                    //                         letterSpacing: '1px',
                    //                         fontWeight: '600px',
                    //                         background: '#cfa671',
                    //                         padding: '12px 40px',
                    //                         border: 'none',
                    //                         "color": '#fff'
                    //                     }
                    //                 },
                    //                 {
                    //                     id: 'dsjkdsakjkjsadj',
                    //                     name: 'txt',
                    //                     txt: "DRINKS",
                    //                     style: {
                    //                         "fontSize": "14px",
                    //                         letterSpacing: '1px',
                    //                         fontWeight: '600px',
                    //                         background: '#fff',
                    //                         padding: '12px 40px',
                    //                         border: 'none',
                    //                         "lineHeight": "",
                    //                         "textDecoration": "",
                    //                         "fontStyle": "",
                    //                         "textAlign": "",
                    //                         "fontFamily": "",
                    //                         "color": '333'
                    //                     }
                    //                 },
                    //                 {
                    //                     id: Math.random().toString(36).substring(2,12),
                    //                     name: 'txt',
                    //                     txt: "LUCNH",
                    //                     style: {
                    //                         "fontSize": "14px",
                    //                         letterSpacing: '1px',
                    //                         fontWeight: '600px',
                    //                         background: '#fff',
                    //                         padding: '12px 40px',
                    //                         border: 'none',
                    //                         "lineHeight": "",
                    //                         "textDecoration": "",
                    //                         "fontStyle": "",
                    //                         "textAlign": "",
                    //                         "fontFamily": "",
                    //                         "color": '333'
                    //                     }
                    //                 },
                    //                 {
                    //                     id: Math.random().toString(36).substring(2,12),
                    //                     name: 'txt',
                    //                     txt: "DINNER",
                    //                     style: {
                    //                         "fontSize": "14px",
                    //                         letterSpacing: '1px',
                    //                         fontWeight: '600px',
                    //                         background: '#fff',
                    //                         padding: '12px 40px',
                    //                         border: 'none',
                    //                         "lineHeight": "",
                    //                         "textDecoration": "",
                    //                         "fontStyle": "",
                    //                         "textAlign": "",
                    //                         "fontFamily": "",
                    //                         "color": '333'
                    //                     }
                    //                 },
                    //             ]
                    //     },
                    //     {

                    //         //begin of gallery
                    //         _id: Math.random().toString(36).substring(2,12),
                    //         name: 'div',
                    //         type: 'gallery-img',
                    //         class: 'grid',
                    //         style: {
                    //             display: 'grid',
                    //             gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr)',
                    //             justifyItems: 'center',
                    //             alignItems: 'center',
                    //             gridGap: '15px'
                    //         },
                    //         children:
                    //             [
                    //                 {
                    //                     _id: Math.random().toString(36).substring(2,12),
                    //                     name: 'div',
                    //                     style: {
                    //                         background: 'transparent',
                    //                         borderRadius: '0px',
                    //                         width: '200px'
                    //                         // height: '350px',
                    //                         // width: '200px',
                    //                     },
                    //                     children:
                    //                         [
                    //                             {
                    //                                 _id: Math.random().toString(36).substring(2,12),
                    //                                 name: 'img',
                    //                                 class: 'card-img',
                    //                                 imgUrl: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NTQxOX0',
                    //                                 style: {
                    //                                     width: '100%',
                    //                                     objectFit: 'cover',
                    //                                 }

                    //                             }
                    //                         ]

                    //                 },
                    //                 {
                    //                     _id: Math.random().toString(36).substring(2,12),
                    //                     name: 'div',
                    //                     style: {
                    //                         background: 'transparent',
                    //                         borderRadius: '0px',
                    //                         width: '200px'
                    //                         // height: '350px',
                    //                         // width: '200px',
                    //                     },
                    //                     children:
                    //                         [
                    //                             {
                    //                                 _id: Math.random().toString(36).substring(2,12),
                    //                                 name: 'img',
                    //                                 class: 'card-img',
                    //                                 imgUrl: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NTQxOX0',
                    //                                 style: {
                    //                                     width: '100%',
                    //                                     objectFit: 'cover',
                    //                                     background: 'https://images.unsplash.com/photo-1552689486-f6773047d19f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NTQxOX0'
                    //                                 }

                    //                             }
                    //                         ]

                    //                 },
                    //                 {
                    //                     _id: Math.random().toString(36).substring(2,12),
                    //                     name: 'div',
                    //                     style: {
                    //                         background: 'transparent',
                    //                         borderRadius: '0px',
                    //                         width: '200px'
                    //                         // height: '350px',
                    //                         // width: '200px',
                    //                     },
                    //                     children:
                    //                         [
                    //                             {
                    //                                 _id: Math.random().toString(36).substring(2,12),
                    //                                 name: 'img',
                    //                                 class: 'card-img',
                    //                                 imgUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NTQxOX0',
                    //                                 style: {
                    //                                     width: '200px',
                    //                                     objectFit: 'cover',
                    //                                 }

                    //                             }
                    //                         ]

                    //                 },
                    //                 {
                    //                     _id: Math.random().toString(36).substring(2,12),
                    //                     name: 'div',
                    //                     style: {
                    //                         background: 'transparent',
                    //                         borderRadius: '0px',
                    //                         width: '200px'
                    //                         // gridColumnEnd: 'span 3',
                    //                         // height: '350px',
                    //                         // width: '200px',
                    //                     },
                    //                     children:
                    //                         [
                    //                             {
                    //                                 _id: Math.random().toString(36).substring(2,12),
                    //                                 name: 'img',
                    //                                 class: 'card-img',
                    //                                 imgUrl: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NTQxOX0',
                    //                                 style: {
                    //                                     width: '100%',
                    //                                     objectFit: 'cover',
                    //                                 }

                    //                             }
                    //                         ]

                    //                 },
                    //                 {
                    //                     _id: Math.random().toString(36).substring(2,12),
                    //                     name: 'div',
                    //                     style: {
                    //                         background: 'transparent',
                    //                         borderRadius: '0px',
                    //                         width: '200px'
                    //                         // height: '350px',
                    //                         // width: '200px',
                    //                     },
                    //                     children:
                    //                         [
                    //                             {
                    //                                 _id: Math.random().toString(36).substring(2,12),
                    //                                 name: 'img',
                    //                                 class: 'card-img',
                    //                                 imgUrl: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NTQxOX0',
                    //                                 style: {
                    //                                     width: '100%',
                    //                                     objectFit: 'cover',
                    //                                 }

                    //                             }
                    //                         ]

                    //                 },
                    //                 {
                    //                     _id: Math.random().toString(36).substring(2,12),
                    //                     name: 'div',
                    //                     style: {
                    //                         background: 'transparent',
                    //                         borderRadius: '0px',
                    //                         width: '200px'
                    //                         // height: '350px',
                    //                         // width: '200px',
                    //                     },
                    //                     children:
                    //                         [
                    //                             {
                    //                                 _id: Math.random().toString(36).substring(2,12),
                    //                                 name: 'img',
                    //                                 class: 'card-img',
                    //                                 imgUrl: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NTQxOX0',
                    //                                 style: {
                    //                                     width: '100%',
                    //                                     objectFit: 'cover',
                    //                                 }

                    //                             }
                    //                         ]

                    //                 },
                    //                 {
                    //                     _id: Math.random().toString(36).substring(2,12),
                    //                     name: 'div',
                    //                     style: {
                    //                         background: 'transparent',
                    //                         borderRadius: '0px',
                    //                         width: '200px'
                    //                         // height: '350px',
                    //                         // width: '200px',
                    //                     },
                    //                     children:
                    //                         [
                    //                             {
                    //                                 _id: Math.random().toString(36).substring(2,12),
                    //                                 name: 'img',
                    //                                 class: 'card-img',
                    //                                 imgUrl: 'https://images.unsplash.com/photo-1552689486-f6773047d19f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NTQxOX0',
                    //                                 style: {
                    //                                     width: '100%',
                    //                                     objectFit: 'cover',
                    //                                     background: 'https://images.unsplash.com/photo-1552689486-f6773047d19f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NTQxOX0'
                    //                                 }

                    //                             }
                    //                         ]

                    //                 },
                    //                 {
                    //                     _id: Math.random().toString(36).substring(2,12),
                    //                     name: 'div',
                    //                     style: {
                    //                         background: 'transparent',
                    //                         borderRadius: '0px',
                    //                         width: '200px'

                    //                         // height: '350px',
                    //                         // width: '200px',
                    //                     },
                    //                     children:
                    //                         [
                    //                             {
                    //                                 _id: Math.random().toString(36).substring(2,12),
                    //                                 name: 'img',
                    //                                 class: 'card-img',
                    //                                 imgUrl: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NTQxOX0',
                    //                                 style: {
                    //                                     width: '100%',
                    //                                     objectFit: 'cover',
                    //                                     background: 'https://images.unsplash.com/photo-1552689486-f6773047d19f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NTQxOX0'
                    //                                 }

                    //                             }
                    //                         ]

                    //                 },


                    //             ]
                    //     }
                    //     ],

                    // }
                    // here it ends
                ]
            }
        }
    }
}
</script>

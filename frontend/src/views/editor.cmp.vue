<template>
    <section class="editor-container flex column" :class="hideEditor">
        <editor-dashboard :samples="samples" :cmpToEdit="currCmpToEdit" @pickedSample="pickSample" @updated="updateCmpToShow" @switched="emptyCmpToEdit">
            <slot>
                <button @click="toggleEditor" class="toggle-dashboard">
                    Toggle Me
                </button>
            </slot>
        </editor-dashboard>
        <section class="flex column">
            <user-controls @saveWap="saveWap" />
            <editor-workspace @droppedSample="pickSample" :cmps="cmps" @clicked="setCmpToEdit" @updatedTxt="updateTxt" @copy="copySection" @delete="deleteSection" @moveSection="moveSection" @droppedSection="dropSection" />
        </section>
    </section>
</template>

<script>
import editorDashboard from "@/cmps/editor/editor-dashboard.cmp.vue";
import editorWorkspace from "@/cmps/editor/editor-workspace.cmp.vue";
import userControls from '@/cmps/editor/user-controls.cmp.vue';
import { utilService } from "@/services/util.service";


export default {
    name: "editor",
    data() {
        return {
            currWap: null,
            cmps: [],
            currCmpToEdit: null,
            isEditorShow: true,
        };
    },
    computed: {
        hideEditor() {
            return { "hide-editor": !this.isEditorShow };
        },
        samples() {
            return this.$store.getters.sampleList;
        },
        // getWap() {
        //     return
        //     this.cmps=this.$store.getters.getWap;

        // }
    },
    components: {
        editorDashboard,
        editorWorkspace,
        userControls
    },
    methods: {
        saveWap() {
            this.$store.dispatch({ type: 'saveWap',wap: this.cmps })
        },
        findByIdRecursive(nodes,id) {
            for(let i=0;i<nodes.length;i++) {
                const child=nodes[i];
                if(child.id===id) {
                    return child;
                } else {
                    if(child.children) {
                        const found=this.findByIdRecursive(child.children,id);
                        if(found) {
                            return found;
                        }
                    }
                }
            }
        },
        replaceIds(node) {
            node.id=Math.random().toString().substring(2,10);
            if(node.children) {
                node.children.forEach((child) => {
                    this.replaceIds(child);
                });
            }
        },
        setCmpToEdit(id) {
            var cmpToEdit=this.findByIdRecursive(this.cmps,id);
            this.currCmpToEdit=cmpToEdit;
        },
        updateCmpToShow(updatedCmp) {
            this.currCmpToEdit=updatedCmp;
        },
        updateTxt(txtValue) {
            this.currCmpToEdit.txt=txtValue;
        },
        toggleEditor() {
            this.isEditorShow=!this.isEditorShow;
        },
        async pickSample(id,idx) {
            const res=await this.$store.dispatch({
                type: "pickedSample",
                id,
            });
            let sample=JSON.parse(JSON.stringify(res));
            //replace the ids of sample in order to differ from section to section
            this.replaceIds(sample);
            const dragResult={
                payload: sample,
                addedIndex: idx,
                removedIndex: null,
            };
            // console.log("drag result:",dragResult);
            this.dropSection(dragResult);
        },
        copySection(id) {
            const section=this.cmps.find((cmp) => cmp.id===id);
            const cmp=JSON.parse(JSON.stringify(section));
            this.replaceIds(cmp);
            const idx=this.cmps.findIndex((cmp) => cmp.id===id);
            this.cmps.splice(idx,0,cmp);
        },
        dropSection(dragResult) {
            this.cmps=utilService.applyDrag(this.cmps,dragResult);
        },
        deleteSection(id) {
            const idx=this.cmps.findIndex((cmp) => cmp.id===id);
            this.cmps.splice(idx,1);
        },
        moveSection(id,diff) {
            const section=this.cmps.find((cmp) => cmp.id===id);
            const idx=this.cmps.findIndex((cmp) => cmp.id===id);
            if(idx===0&&diff===-1) return;
            this.cmps.splice(idx,1);
            this.cmps.splice(idx+diff,0,section);
        },
        emptyCmpToEdit() {
            this.currCmpToEdit=null;
        },
    },
    async created() {
        const id=this.$route.params.id;
        if(id) {
            this.currWap=await this.$store.dispatch({ type: 'loadWap',id })
        }
        else {
            this.currWap={ name: '',children: [] }
        }
    }
}
</script>

// {
//             id: Math.random().toString(36).substring(2,10),
//             name: "section",
//             imgUrl: '',
//             class: "flex column justify-center align-center",
//             color: "#222",
//             style: {
//                 // background: "url(https://images.unsplash.com/photo-1529271208007-f3a35808467b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80) center / cover no-repeat",
//                 background: "gray",
//                 color: "red",
//                 height: "300px"
//             },
//             children: [{
//                 id: Math.random().toString(36).substring(2,10),
//                 name: "txt",
//                 class: "h1-heading",
//                 txt: "MATAN THIS SHIT MAYBE WORKS",
//                 style: {
//                     fontSize: "25px",
//                     lineHeight: 1.5,
//                     letterSpacing: "10px",
//                     backgroundColor: "",
//                     color: 'red',
//                     fontFamily: 'monospace',
//                     textDecoration: 'underline',
//                     fontStyle: 'italic',
//                     fontWeight: 'bold'
//                 }
//             },
//             {
//                 id: Math.random().toString(36).substring(2,10),
//                 name: "txt",
//                 class: "hero-p",
//                 txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur quo dolorem itaque voluptas ab!",
//                 style: {
//                     fontSize: "25px",
//                     lineHeight: 1.5,
//                     letterSpacing: "10px",
//                     backgroundColor: "",
//                     color: 'red',
//                     fontFamily: 'cursive',
//                     textDecoration: 'underline',
//                     fontStyle: 'italic',
//                     textAlign: 'center'
//                 },
//             },
//             {
//                 id: Math.random().toString(36).substring(2,10),
//                 name: "link",
//                 class: "hero-link",
//                 txt: "CLICK ME!",
//                 href: "https://www.google.com/",
//                 style: {
//                     fontSize: "25px",
//                     lineHeight: 1.5,
//                     letterSpacing: "10px",
//                     color: 'red',
//                     backgroundColor: "",
//                     fontFamily: 'cursive',
//                     textDecoration: 'underline',
//                     fontStyle: 'italic'
//                 }
//             }]
//         },
//         {
//             id: Math.random().toString(36).substring(2,10),
//             name: "section",
//             imgUrl: '',
//             class: "flex column justify-center align-center",
//             color: "#222",
//             style: {
//                 // background: "url(https://images.unsplash.com/photo-1529271208007-f3a35808467b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80) center / cover no-repeat",
//                 background: "gray",
//                 color: "#222",
//                 height: "300px"
//             },
//             children: [{
//                 id: Math.random().toString(36).substring(2,10),
//                 name: "txt",
//                 class: "h1-heading",
//                 txt: "this is h1",
//                 style: {
//                     fontSize: "25px",
//                     lineHeight: 1.5,
//                     letterSpacing: "10px",
//                     backgroundColor: "",
//                     color: "#222",
//                     fontFamily: 'cursive'
//                 }
//             },
//             {
//                 id: Math.random().toString(36).substring(2,10),
//                 name: "txt",
//                 class: "hero-p",
//                 txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur quo dolorem itaque voluptas ab!",
//                 style: {
//                     fontSize: "25px",
//                     lineHeight: 1.5,
//                     letterSpacing: "10px",
//                     backgroundColor: "",
//                     color: "#222",
//                     fontFamily: 'cursive'
//                 }
//             },
//             {
//                 id: Math.random().toString(36).substring(2,10),
//                 name: "link",
//                 class: "hero-link",
//                 txt: "CLICK ME!",
//                 href: "https://www.google.com/",
//                 style: {
//                     fontSize: "25px",
//                     lineHeight: 1.5,
//                     letterSpacing: "10px",
//                     color: "#222",
//                     backgroundColor: "",
//                     fontFamily: 'cursive'
//                 }
//             }]
//         },
//         {
//             id: Math.random().toString(36).substring(2,10),
//             name: "section",
//             imgUrl: '',
//             class: "flex column justify-center align-center",
//             style: {
//                 background: "url(https://images.unsplash.com/photo-1529271208007-f3a35808467b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80) center / cover no-repeat",
//                 // background: "gray",
//                 color: "#222",
//                 height: "300px"
//             },
//             children: [{
//                 id: Math.random().toString(36).substring(2,10),
//                 name: "txt",
//                 class: "h1-heading",
//                 txt: "this is h1",
//                 style: {
//                     fontSize: "25px",
//                     lineHeight: 1.5,
//                     letterSpacing: "10px",
//                     backgroundColor: "",
//                     color: 'red',
//                     fontFamily: 'cursive'
//                 }
//             },
//             {
//                 id: Math.random().toString(36).substring(2,10),
//                 name: "txt",
//                 class: "hero-p",
//                 txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur quo dolorem itaque voluptas ab!",
//                 style: {
//                     fontSize: "25px",
//                     lineHeight: 1.5,
//                     letterSpacing: "10px",
//                     backgroundColor: "",
//                     color: 'red',
//                     fontFamily: 'cursive'
//                 }
//             },
//             {
//                 id: Math.random().toString(36).substring(2,10),
//                 name: "link",
//                 class: "hero-link",
//                 txt: "CLICK ME!",
//                 href: "https://www.google.com/",
//                 style: {
//                     fontSize: "25px",
//                     lineHeight: 1.5,
//                     letterSpacing: "10px",
//                     color: 'red',
//                     backgroundColor: "",
//                     fontFamily: 'cursive'
//                 }
//             }]


//         }
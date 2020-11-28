<template>
    <section class="editor-container flex column" :class="hideEditor">
        <editor-dashboard :samples="samples" :cmpToEdit="currCmpToEdit" @pickedSample="pickSample" @updated="updateCmpToShow" @switched="emptyCmpToEdit">
            <slot>
                <button @click="toggleEditor" class="toggle-dashboard">
                    Toggle Me
                </button>
            </slot>
        </editor-dashboard>
        <editor-workspace @droppedSample="pickSample" :cmps="cmps" @clicked="setCmpToEdit" @updatedTxt="updateTxt" @copy="copySection" @delete="deleteSection" @moveSection="moveSection" @droppedSection="dropSection" />
    </section>
</template>

<script>
import editorDashboard from "@/cmps/editor/editor-dashboard.cmp.vue";
import editorWorkspace from "@/cmps/editor/editor-workspace.cmp.vue";
import { utilService } from "@/services/util.service";

export default {
    name: "editor",
    data() {
        return {
            cmps: null,
            currCmpToEdit: null,
            currWap: null,
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
    },
    components: {
        editorDashboard,
        editorWorkspace,
    },
    methods: {
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
            node.id=utilService.makeId();
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
            console.log("id:",id);
            console.log("idx:",idx);
            const res=await this.$store.dispatch({
                type: "pickedSample",
                id,
            });
            console.log("res is:",res);
            let sample=JSON.parse(JSON.stringify(res));
            //replace the ids of sample in order to differ from section to section
            this.replaceIds(sample);
            const dragResult={
                payload: sample,
                addedIndex: idx,
                removedIndex: null,
            };
            console.log("drag result:",dragResult);
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
    created() {
        this.cmps=[
            {
                id: "afaewfag4wravfsfdwe",
                name: "section",
                type: "map",
                class: "map-section flex space-around align-center",
                style: {
                    background:
                        "url(https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NTQxOX0) center center / cover no-repeat",
                    borderRadius: "0px",
                    height: "500px",
                },
                children: [
                    {
                        id: "awetaerhgavaefw3ew",
                        name: "div",
                        type: "inner-div",
                        class: "inner-div flex column justify-center align-center",
                        style: {
                            background: "#69D2E7",
                            borderRadius: "5px",
                            height: "100%",
                            width: "100%",
                        },
                        children: [
                            {
                                id: "asstjrythsregr",
                                name: "txt",
                                type: "inner-text",
                                class: "map-inner-text",
                                txt: "CONTACT US",
                                style: {
                                    fontSize: "28px",
                                    lineHeight: 1,
                                    letterSpacing: "5px",
                                    background: "inherit",
                                    color: "#222",
                                    fontFamily: "inherit",
                                    textDecoration: "inherit",
                                    fontStyle: "inherit",
                                    textAlign: "center",
                                },
                            },
                            {
                                id: "awegaethtryktj",
                                name: "txt",
                                type: "inner-text",
                                class: "map-inner-text",
                                txt: "We are always here to help out whenever we can :)",
                                style: {
                                    fontSize: "16px",
                                    lineHeight: 0.8,
                                    letterSpacing: "2px",
                                    background: "inherit",
                                    color: "#212121",
                                    fontFamily: "inherit",
                                    textDecoration: "inherit",
                                    fontStyle: "inherit",
                                    textAlign: "center",
                                },
                            },
                            {
                                id: Math.random().toString(36).substring(2,10),
                                name: "input",
                                type: "inner-input",
                                class: "map-inner-input",
                                txt: "Name",
                                style: {
                                    padding: "0.5rem",
                                    background: "white",
                                    color: "#7E2D96",
                                    fontFamily: "inherit",
                                    fontSize: "22px",
                                    borderRadius: "100px",
                                },
                            },
                            {
                                id: Math.random().toString(36).substring(2,10),
                                name: "input",
                                type: "inner-input",
                                class: "map-inner-input",
                                txt: "Email",
                                style: {
                                    padding: "0.5rem",
                                    background: "white",
                                    color: "#7E2D96",
                                    fontFamily: "inherit",
                                    fontSize: "22px",
                                    borderRadius: "100px",
                                },
                            },
                            {
                                id: Math.random().toString(36).substring(2,10),
                                name: "input",
                                type: "inner-input",
                                class: "map-inner-input",
                                txt: "Phone",
                                style: {
                                    padding: "0.5rem",
                                    background: "white",
                                    color: "#7E2D96",
                                    fontFamily: "inherit",
                                    fontSize: "22px",
                                    borderRadius: "100px",
                                },
                            },
                            {
                                id: Math.random().toString(36).substring(2,10),
                                name: "textarea",
                                type: "inner-text",
                                class: "map-inner-text",
                                txt: "Type your message",
                                style: {
                                    fontSize: "18px",
                                    lineHeight: 1.2,
                                    letterSpacing: "10px",
                                    background: "white",
                                    color: "#7E2D96",
                                    fontFamily: "inherit",
                                    textDecoration: "inherit",
                                    fontStyle: "inherit",
                                    textAlign: "center",
                                },
                            },
                            {
                                id: "awetaerhgavaefw3ew",
                                name: "div",
                                type: "inner-div",
                                class: "inner-div flex column justify-center align-center",
                                style: {
                                    background: "#69D2E7",
                                    borderRadius: "0px",
                                    height: "100%",
                                    width: "100%",
                                },
                                children: [
                                    {
                                        id: Math.random().toString(36).substring(2,10),
                                        name: "txt",
                                        type: "inner-text",
                                        class: "map-inner-text",
                                        txt: "contact@yourmail.com",
                                        style: {
                                            fontSize: "18px",
                                            lineHeight: 1.2,
                                            letterSpacing: "4px",
                                            background: "inherit",
                                            color: "#7E2D96",
                                            fontFamily: "inherit",
                                            textDecoration: "inherit",
                                            fontStyle: "inherit",
                                            textAlign: "center",
                                        },
                                    },
                                    {
                                        id: Math.random().toString(36).substring(2,10),
                                        name: "txt",
                                        type: "inner-text",
                                        class: "map-inner-text",
                                        txt: "+972-666-6666",
                                        style: {
                                            fontSize: "24px",
                                            lineHeight: 1.2,
                                            letterSpacing: "10px",
                                            background: "inherit",
                                            color: "#7E2D96",
                                            fontFamily: "inherit",
                                            textDecoration: "inherit",
                                            fontStyle: "inherit",
                                            textAlign: "center",
                                        },
                                    },
                                ],
                            },

                        ],
                    },
                    {
                        id: "areyharuyjtyberry3esvd",
                        name: "google-map",
                        type: "map",
                        class: "google-map none-drag-area-selector",
                        style: {
                            background: "transparent",
                            borderRadius: "2px",
                            height: "100%",
                            width: "100%",
                        },
                    }
                ],
            },
        ];
    },
};
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
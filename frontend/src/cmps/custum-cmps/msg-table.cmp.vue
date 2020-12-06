<template>
    <el-table
        :data="msgs"
        style="width: 100%"
    >
        <el-table-column
            fixed
            prop="data.reviews.content.name"
            label="Name"
            width="150"
        >
        </el-table-column>
        <el-table-column
            prop="data.content.email"
            label="Email"
            width="120"
        >
        </el-table-column>
        <el-table-column
            prop="data.content.subject"
            label="Subject"
            width="120"
        >
        </el-table-column>
        <el-table-column
            prop="data.content.message"
            label="Message"
            width="120"
        >
        </el-table-column>
        <el-table-column
            prop="title"
            label="Website Name"
            width="300"
        >
        </el-table-column>
        <el-table-column
            fixed="right"
            label="Operations"
            width="120"
        >
            <template slot-scope="">
                <el-button
                    @click="handleClick"
                    type="text"
                    size="small"
                >Detail</el-button>
                <el-button
                    type="text"
                    size="small"
                >Edit</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    props: {
        data: {
            type: Array
        }
    },
    methods: {
        handleClick() {
            console.log('click');
        }
    },
    computed: {
        msgs() {
            return this.data.forEach(wap => {
                return wap.map(msg => msg.reviews)
            })
        }
    }

}
</script>
<template>
    <div>
        <!-- 1. Create the button that will be clicked to select a file -->
        <v-btn 
            color="primary" 
            rounded 
            dark 
            :loading="isSelecting" 
            @click="handleFileImport"
        >
           Subir foto
        </v-btn>

        <!-- Create a File Input that will be hidden but triggered with JavaScript -->
        <input 
            :v-model="selectedFile"
            ref="uploader" 
            class="d-none" 
            type="file"
            v-on:click="postMedical()"
            @change="onFileChanged"
        >

        <div class="w-full flex justify-center">
        <img class="rounded-full border-8 max-h-60 mb-4 border-zinc-800" src="list.profile_photo" alt="">
      </div>

    </div>

   
</template>

<script>
    export default {
        name: 'Example',
        data(){
            return {
                isSelecting: false,
                selectedFile: null,
                list: null,
            }
        },
        methods: {


                        postMedical(){
                        const formData = new FormData();
                        formData.append('photo', this.selectedFile);
                        this.$axios
                        .post('/api/v1/user/uploadprofilephoto', formData,
                        {
                            headers: {
                            "Authorization": 'Bearer ' + localStorage.getItem("token"),
                            "Content-Type": "multipart/form-data"
                            }
                            
                        })
                        
                        },


                                       

                                                
                                                getspecialty() {
                                            this.$axios
                                            .get('/api/v1/user/profile',{
                                                headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}
                                            })
                                            .then(res => {
                                                this.list= res.data.data
                                                alert(res.data.data.profile_photo)

                                            })
                                            },
                                         
                                        handleFileImport() {
                                            this.isSelecting = true;

                                            // After obtaining the focus when closing the FilePicker, return the button state to normal
                                            window.addEventListener('focus', () => {
                                                this.isSelecting = false
                                            }, { once: true });
                                            
                                            // Trigger click on the FileInput
                                            this.$refs.uploader.click();
                                        },
                                        onFileChanged(e) {
                                            this.selectedFile = e.target.files[0];

                                            // Do whatever you need with the file, liek reading it with FileReader
                                        }, 

      
        },

        mounted() {

                this.getspecialty()
            },
   

    }
</script>
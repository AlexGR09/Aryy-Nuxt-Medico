<template>
    <v-card
      flat
      class="pa-3 mt-2"
    >
      <v-card-text class="d-flex">
        <v-avatar
          rounded
          size="120"
          class="me-6"
        >
          <v-img></v-img>
        </v-avatar>
  
        <!-- upload photo -->
        <div>
          <v-btn
            color="primary"
            class="me-3 mt-5"
            
          >
            <v-icon class="d-sm-none">
             
            </v-icon>
            <span class="d-none d-sm-block">Upload new photo</span>
          </v-btn>
  
          <input
            ref="refInputEl"
            type="file"
            accept=".jpeg,.png,.jpg,GIF"
            :hidden="true"
          />
  
          <v-btn
            color="error"
            outlined
            class="mt-5"
          >
            Reset
          </v-btn>
          <p class="text-sm mt-5">
            Allowed JPG, GIF or PNG. Max size of 800K
          </p>
        </div>
      </v-card-text>
  
      <v-card-text>
        <v-form class="multi-col-validation mt-6">
          <v-row>
            <v-col
              md="6"
              cols="12"
            >
              <v-text-field
                
                label="Username"
                dense
                outlined
              ></v-text-field>
            </v-col>
  
            <v-col
              md="6"
              cols="12"
            >
              <v-text-field
                
                label="Name"
                dense
                outlined
              ></v-text-field>
            </v-col>
  
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
              
                label="E-mail"
                dense
                outlined
              ></v-text-field>
            </v-col>
  
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
               
                dense
                label="Role"
                outlined
              ></v-text-field>
            </v-col>
  
            <v-col
              cols="12"
              md="6"
            >
              <v-select
               
                dense
                outlined
           
              ></v-select>
            </v-col>
  
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
             
                dense
                outlined
                label="Company"
              ></v-text-field>
            </v-col>
  
            <!-- alert -->
            <v-col cols="12">
              <v-alert
                color="warning"
                text
                class="mb-0"
              >
                <div class="d-flex align-start">
                  <v-icon color="warning">
                   
                  </v-icon>
  
                  <div class="ms-3">
                    <p class="text-base font-weight-medium mb-1">
                      Your email is not confirmed. Please check your inbox.
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="text-decoration-none warning--text"
                    >
                      <span class="text-sm">Resend Confirmation</span>
                    </a>
                  </div>
                </div>
              </v-alert>
            </v-col>
  
            <v-col cols="12">
              <v-btn
                color="primary"
                class="me-3 mt-4"
              >
                Save changes
              </v-btn>
              <v-btn
                color="secondary"
                outlined
                class="mt-4"
                type="reset"
                
              >
                Cancel
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </template>
  
 
  
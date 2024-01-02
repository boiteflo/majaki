<template>
<div>
    <v-app-bar app dark color="#FF6F00" >
      <div style="width:300px; position:absolute; bottom:0px; top:0px; left:180px; overflow: hidden;">
        <img :style="{width:$vuetify.breakpoint.width >= 950 ? 150 + 'px' :130 + 'px', 'object-fit': 'cover'}" :src="require('../assets/header.png')"/>
      </div>
      <v-app-bar-nav-icon variant="text" @click="showDrawer=true"></v-app-bar-nav-icon>
      <router-link to="/">
        <v-btn
          target="_blank"
          style="position:relative"
          text
          @click="unselect()"
        >
          <h3 style="position:absolute; top:-15px; letter-spacing:2px">ma jaki</h3>
          <p style="position:absolute; top:2px; left:-25px; color:#D0D0D0">DECHETTERIE</p>
          <span style="position:absolute; top:5px; left:-17px; font-size:10px">{{version}}</span>
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>
      
      <link-button v-for="link in links" 
        :key="'menuBarr' +link.Text" 
        :url="link.Url" 
        :external="link.external" 
        :text="$vuetify.breakpoint.width >= 1050 ? link.Text : ''" 
        :icon="link.Icon">
      </link-button>

    </v-app-bar>

      <v-navigation-drawer v-model="showDrawer" absolute temporary color="white">
        
        <img style="width:400px; height:600px; object-position: -100px 00px; object-fit:cover; position:absolute;" :src="require('../assets/menu.png')"/>
        <br>
        <div>
          <router-link to="/">
            <v-btn
              target="_blank"
              text
            >
              <v-icon class="colorWhite">mdi-cards</v-icon>
              <h3 class="colorWhite">MA JAKI - DECHETTERIE </h3>
            </v-btn>
          </router-link>
          <link-button v-for="link in links" 
            :key="'navigationDrawer' +link.Text" 
            :url="link.Url" 
            :external="link.external" 
            :text="link.Text" 
            :icon="link.Icon"
            class="m5px w100p">
          </link-button>
        </div>
      </v-navigation-drawer>
</div>
</template>

<script>
import linkButton from './linkButton';

  export default {
    name: 'menuBar',
    components : {linkButton},
    data: () => ({
        showDrawer: false,
        links : [
          {Text: 'DEPOSER DES DECHETS', Icon: 'mdi-dump-truck', Url:'/deposit'},
          {Text: 'NOUS CONTACTER', Icon: 'mdi-account-group', Url:'/contact'},
          {Text: 'SE CONNECTER', Icon: 'mdi-login', Url:'/login'},
        ]
    }),
    methods:{
    }
  }
</script>

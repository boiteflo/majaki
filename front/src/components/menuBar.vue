<template>
<div>
    <v-app-bar app dark color="#003A3E" >
      <div style="width:180px; position:absolute; bottom:0px; top:5px; left:50px; overflow: hidden;">
        <img style="width:50px; object-fit:cover" :src="require('../assets/headerLogo.png')"/>
      </div>
      <v-app-bar-nav-icon variant="text" @click="showDrawer=true"></v-app-bar-nav-icon>
      <router-link to="/">
        <v-btn
          target="_blank"
          style="position:relative; margin-left:50px"
          text
          @click="unselect()"
        >
          <h3 style="position:absolute; top:-15px; letter-spacing:2px">ma jaki</h3>
          <p style="position:absolute; top:2px; left:-25px; color:#D0D0D0">DECHETTERIE</p>
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>
      
      <link-button v-for="link in getLinks()" 
        :key="'menuBarr' +link.Text" 
        :url="link.Url" 
        :external="link.external" 
        :text="$vuetify.breakpoint.width >= 1050 ? link.Text : ''" 
        :icon="link.Icon">
      </link-button>

    </v-app-bar>

      <v-navigation-drawer v-model="showDrawer" absolute temporary color="#003A3E">
        <!--
        <img style="width:400px; height:600px; object-position: -100px 00px; object-fit:cover; position:absolute;" :src="require('../assets/menu.png')"/>
        -->
        <br>
        <div>
          <router-link to="/">
            <v-btn
              target="_blank"
              text
            >
              <img style="width:50px; margin-top:20px; object-fit:cover" :src="require('../assets/headerLogo.png')"/>
              <h3 class="colorWhite">MA JAKI </h3>
              <p style="margin-top:50px; margin-left:-75px; color:#D0D0D0">DECHETTERIE</p>
            </v-btn>
          </router-link>
          <div v-for="link in getLinks()" 
            :key="'navigationDrawer' +link.Text"
            style="margin-top:30px">
            <link-button  
              :url="link.Url" 
              :external="link.external" 
              :text="link.Text" 
              :icon="link.Icon"
              class="m5px w100p">
            </link-button>
          </div>
        </div>
      </v-navigation-drawer>
</div>
</template>

<script>
import linkButton from './linkButton';

  export default {
    name: 'menuBar',
    props: ["user"],
    components : {linkButton},
    data: () => ({
        showDrawer: false
    }),
    methods:{
      getLinks(){
        let result = [ 
          {Text: 'DEPOSER DES DECHETS', Icon: 'mdi-dump-truck', Url:'/deposit'},
          {Text: 'NOUS CONTACTER', Icon: 'mdi-account-group', Url:'/contact'}];
        if(this.user)
          result = result.concat([
          {Text: 'SE DECONNECTER', Icon: 'mdi-logout', Url:'/logout'},
          {Text: this.user.Name.toUpperCase(), Icon: 'mdi-account-circle', Url:'/account'}]);
        else
          result.push({Text: 'SE CONNECTER', Icon: 'mdi-login', Url:'/login'});
        return result;
      }
    }
  }
</script>

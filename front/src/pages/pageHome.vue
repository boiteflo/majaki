<template>
    <div>
      
      <v-parallax :src="require('../assets/img1.jpg')" height="500">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
          <h1 style="font-size:50px" class="shadowBlack">
            DEPOSER VOS DECHETS SEREINEMENT
          </h1>
          <h4 style="font-size:30px" class="shadowBlack subheading">
            Revaloriser, Stocker et certifier pour un gage d'écoresponsabilité efficace.
          </h4>
        </div>
      </v-parallax>

      <div class="separation"  style="text-align:center; margin-right:100px; margin-left:100px">
        <h1>UNE DECHETTERIE PROPRE</h1>
        <br>
        <p>La déchetterie exemplifie notre engagement envers un environnement propre et sain. Immaculée et bien entretenue, notre installation reflète notre dévouement à maintenir des normes élevées en matière de propreté et d'hygiène. Les aires de tri sont organisées de manière méthodique, facilitant la séparation efficace des matériaux recyclables. Des procédures rigoureuses de gestion des déchets assurent non seulement la propreté immédiate du site, mais également la réduction de l'impact environnemental global. En outre, notre équipe dédiée veille à ce que les déchets soient stockés et manipulés avec soin, garantissant ainsi un environnement sûr pour le personnel et les visiteurs. Chez nous, une déchetterie propre va au-delà de l'apparence, c'est une démonstration tangible de notre engagement envers la durabilité et la qualité environnementale.</p>
      </div>
      
      <v-parallax class="separation" :src="require('../assets/img2.jpg')" height="200">
      </v-parallax>

      <div class="flex flex-responsive flex-space-around separation"  style="text-align:center;">
        <div class="flex-grow m10px">
          <v-icon style="font-size:100px;" class="color1">mdi-recycle</v-icon>
          <h1>REVALORISER</h1>
          <p>les matériaux collectés sont triés, recyclés et transformés autant que possible afin de leur donner une nouvelle vie. Cette approche durable réduit la dépendance à l'égard des décharges et minimise l'impact environnemental global.</p>
        </div>
        <div class="flex-grow m10px">
          <v-icon style="font-size:100px;" class="color1">mdi-home-silo</v-icon>
          <h1>STOCKER</h1>
          <p>Les installations sont conçues de manière à garantir que les déchets dangereux ou sensibles sont manipulés, stockés et éliminés conformément aux normes de sécurité les plus strictes, préservant ainsi la santé publique et l'environnement. </p>
        </div>
        <div class="flex-grow m10px">
          <v-icon style="font-size:100px;" class="color1">mdi-file-certificate</v-icon>
          <h1>CERTIFIER</h1>
          <p>Cette certification apporte une assurance aux parties prenantes quant à la conformité aux meilleures pratiques environnementales et à l'engagement envers une gestion responsable des déchets.</p>
        </div>
      </div>
      
      <div class="flex flex-responsive flex-space-around separation">
        <div class="flex-grow m10px"  style="text-align:center; margin-right:100px; margin-left:100px">
          <br>
          <br>
          <br>
          <h1>DEPOSER MES DECHETS</h1>
          <br>
          <p style="font-weight: bold;">Utiliser le lien suivant pour déposer vos déchets</p>
          <div class="flex flex-center">
            <link-button class="color1Bg borderRadius" style="width:250px"  url="/deposit" text="DEPOSER MES DECHETS" icon="mdi-dump-truck"> </link-button>
          </div>   
          <br>     
        </div>
        <div class="borderRadius color3Bg flex-grow m10px">
          <div class="m10px">
            <v-icon class="m5px" style="font-size:30px">mdi-arrow-right-circle-outline</v-icon>
            <p class="m5px">Déposer vos déchets n'a jamais été aussi simple ! Cliquez sur le bouton ci-dessous pour accéder à <strong>notre formulaire convivial</strong>.</p>  
            <v-icon class="m5px" style="font-size:30px">mdi-map-marker</v-icon>
            <p class="m5px">En quelques étapes faciles, vous pourrez indiquer les détails de vos déchets et <strong>choisir la déchetterie la plus proche</strong>.</p>
            <v-icon class="m5px" style="font-size:30px">mdi-sprout</v-icon>
            <p class="m5px">Ensemble, faisons un pas de plus vers un <strong>environnement plus propre et durable</strong> !</p>
          </div>
          <br>     
        </div>
      </div>

      <v-parallax class="separation" :src="require('../assets/decheterie.jpg')" height="400">
      </v-parallax>

      <h1 class="separation" style="text-align:center">DECOUVREZ NOTRE EQUIPE</h1>
      <br>
      <div class="flex flex-space-around"  style="text-align:center;">
        <div class="flex-grow m10px">
          <img width="200px" class="borderRadius100" :src="require('../assets/florent.png')" />
          <h3>Responsable Web</h3>
          <p>Florent Banquart</p>
        </div>
        <div class="flex-grow m10px">
          <img width="200px" class="borderRadius100" :src="require('../assets/maria.jpg')" />
          <h3>Eco Gérante</h3>
          <p>Maria Ross</p>
        </div>
        <div class="flex-grow m10px">
          <img width="200px" class="borderRadius100" :src="require('../assets/erwin.jpg')" />
          <h3>Chef de Carrière</h3>
          <p>Erwin Smith</p>
        </div>
      </div>
    </div>
</template>


<script>
import linkButton from '../components/linkButton';
export default {
  name: 'pageHome',
  components : {linkButton},
  methods: {
  }
};
</script>

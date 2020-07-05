<template>
    <v-container style="padding-top: 0;">
        <v-row id="row1">
            <v-img id="img1" position="center bottom 16%" style="margin-top: 0;"
                   src="https://revista.adventista.es/wp-content/uploads/sites/2/2017/11/dino-reichmuth-115620-e1511173970410.jpg"
                   aspect-ratio="2.433">
                <v-card-text id="text1"
                             style="color: white; font-size: large; text-shadow: 1px 1px #8f8f8f; padding-left: 40% ">
                    <h1>Thanks </h1> <br class="break"/>
                    <h1>for letting us be with you </h1><br class="break"/>
                    <h1>on your adventures, </h1><br/>
                    <h1> welcome to GoingTo.</h1><br class="break"/>
                </v-card-text>
                <v-btn style="background-color: #49b6f8; margin-bottom: 10px; margin-left: 40%">
                    <router-link to="/explore" class="txt"
                                 style="text-decoration: none; color: white; font-weight: bold; font-size: small">
                        Explore
                    </router-link>
                </v-btn>
            </v-img>
        </v-row>

        <v-row style="margin-top: 10px">
            <h1 style="color: gray;">Covid-19</h1>
            <br>
            <h1 style="text-align: left">GoingTo is aware of the current uncertainty that the
                world is going through, so it gives you some</h1>
            <h1 style="color: #00b0ff;">recommendations.</h1>
        </v-row>

        <v-row>
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between">

                <v-card
                        class="card1 pa-6"
                        outlined
                        tile
                        width="300px"
                        height="300px"
                >
                    <v-img width="50%" style="margin: 30px 0 0 70px"
                           src="https://image.flaticon.com/icons/svg/2950/2950157.svg"/>
                    <v-card-subtitle style="text-align: center">Always wears mask</v-card-subtitle>
                    <v-card-subtitle style="text-align: center"><a
                            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks"
                            target="_blank">Learn More</a></v-card-subtitle>
                </v-card>

                <v-card
                        class="card1 pa-6"
                        outlined
                        tile
                        width="300px"
                        height="300px"
                >
                    <v-img width="50%" style="margin: 30px 0 0 70px"
                           src="https://image.flaticon.com/icons/svg/2913/2913564.svg"/>
                    <v-card-subtitle style="text-align: center">Constantly wash your hands</v-card-subtitle>
                    <v-card-subtitle style="text-align: center"><a
                            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks"
                            target="_blank">Learn More</a></v-card-subtitle>
                </v-card>

                <v-card
                        class="card1 pa-6"
                        outlined
                        tile
                        width="300px"
                        height="300px"
                >
                    <v-img width="50%" style="margin: 30px 0 0 70px"
                           src="https://image.flaticon.com/icons/svg/2913/2913557.svg"/>
                    <v-card-subtitle style="text-align: center">Take a disinfectant with you</v-card-subtitle>
                    <v-card-subtitle style="text-align: center"><a
                            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks"
                            target="_blank">Learn More</a></v-card-subtitle>
                </v-card>

            </div>
        </v-row>

        <v-row>
            <v-card style="width: 100%;  background: rgb(1,1,1);
background: linear-gradient(180deg, rgba(1,1,1,1) 45%, rgba(95,160,173,1) 100%);  padding: 30px;margin-top: 50px">
                <h1 style="color: white; font-size: 39px; text-align: left">We stand with</h1>
                <h1 style="color: white; font-size: 39px; text-align: left">#BlacklivesMatter</h1><br/>
                <v-card-subtitle class="blm" style="color: white; letter-spacing: 1px; text-align: left">Now more than
                    ever, it’s
                    important that you know how we’re fighting discrimination on GoingTo. We would like to know how you
                    feel, if you have any discrimination problem contact us.
                </v-card-subtitle>
            </v-card>
        </v-row>

        <v-row>
            <v-card style="width: 100%;  background: rgb(255,226,119);
background: linear-gradient(90deg, rgba(255,226,119,1) 35%, rgba(0,212,255,1) 100%);  padding: 30px; margin-top: 50px">
                <h1 style="color: #646464; font-size: 40px">Experiences for Pride</h1>
                <v-card-subtitle class="blm" style="color: #646464; ">Learn how the different
                    countries live the Pride experience
                </v-card-subtitle>

                <v-container id="publish" style="padding: 10px; display: flex; flex-wrap: wrap">
                    <v-img class="imga"
                           src="https://www.eluniverso.com/sites/default/files/styles/powgallery_1280/public/fotos/2020/06/7-4.jpg?itok=hHcG3EPx"/>

                    <v-img class="imga"
                           src="https://www.macleans.ca/wp-content/uploads/2020/06/JUSTIN-TRUDEAU-POLITICIZATION-OF-PRIDE-PARADE-HOARD-JUN29-766x431.jpg"/>

                    <v-img class="imgb"
                           src="https://www.gelestatic.it/thimg/QB1g9by_0m0kjn15ED_pL3nsqzU=/fit-in/960x540/filters:format(webp)/https%3A//www.lastampa.it/image/contentid/policy%3A1.36536415%3A1561987949/843a3932-9a78-11e9-885d-a4a5552cec84_WK1G1GQL8092-krFI-U11203826134565ooB-1024x576%40LaStampa.it-Home%2520Page.jpg%3Ff%3Ddetail_558%26h%3D720%26w%3D1280%26%24p%24f%24h%24w%3D8d129e2"/>

                    <v-img class="imgb"
                           src="https://www.visitphilly.com/wp-content/uploads/2018/02/New_Hope_Celebrates_Pride_flag-crowd-jfusco-for-vp-2200x1237px.jpg"/>

                    <v-img class="imgc"
                           src="https://www.globalpride2020.org/wp-content/uploads/2020/06/thank-you_all-lang-04.png.pagespeed.ce.MSel6M-VtN.png"/>

                </v-container>
            </v-card>

        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    @media (max-width: 2700px) {

        #text1 {
            margin-top: 100px;
        }

        .card1 {
            margin: 30px auto 20px 20px;
        }

        .blm {
            font-size: 20px;
        }

        .imga {
            margin: 20px;
            max-width: 400px;
            border-radius: 10px;
        }

        .imgb {
            margin: 20px;
            max-width: 400px;
            border-radius: 10px;
        }

        .imgc {
            margin: 20px 0;
            border-radius: 10px;
            max-width: 890px;
        }
    }

    @media (max-width: 600px) {

        .break {
            display: none;
        }

        #text1 {
            margin-top: 0;
        }

        h1 {
            font-size: 16px;
            margin: 2px 12px;
        }

        .card1 {
            margin-left: auto;
            margin-right: auto;
        }

        .blm {
            font-size: 14px;
        }

        .imga {
            max-width: 300px;
        }

        .imgb {
            max-width: 300px;
        }

        .imgc {
            max-width: 339px;
            border-radius: 5px;
        }
        #publish{
            margin-left: 0px;
        }
    }
</style>

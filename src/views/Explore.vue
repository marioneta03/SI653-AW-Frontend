<template>
    <v-container>
            <div class="explore">
                <h1>Explore</h1>
            </div>
            <v-row style="background-color: white; border: solid 0.5px #c6c6c6; border-radius: 5px;" class="mx-1">
                <v-col
                        v-for="card in cards"
                        :key="card.title"
                        cols="12" xs="12" sm="6" md="4"
                >
                    <v-card style="margin: 5px 5px; border: solid 0.5px #e3e3e3">
                        <v-img
                                :src="card.src"
                                class="white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                                height="250px"
                        >

                            <v-btn icon color="white">
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>

                            <v-btn icon color="white">
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                        </v-img>

                    </v-card>
                </v-col>
            </v-row>
    </v-container>

</template>

<script>
    export default {
        name: "Explore",

        data: () => ({
            cards: [
                {
                    title: 'Pre-fab homes',
                    src: 'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    flex: 4
                },
                {
                    title: 'Favorite road trips',
                    src: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    flex: 8
                },
                {
                    title: 'Best airlines',
                    src: 'https://images.dailyhive.com/20190121105514/shutterstock_739779886.jpg',
                    flex: 4
                },
                {
                    title: 'Pre-fab homes',
                    src: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/7468bdba-5ab5-4b41-9744-a7e60e3da3cf-12porto.jpg',
                    flex: 4
                },
                {
                    title: 'Favorite road trips',
                    src: 'https://www.rdasia.com/wp-content/uploads/sites/2/2020/03/35-St-Petersburg-shutterstock_1407744842-770.jpg',
                    flex: 4
                },
                {
                    title: 'Best airlines',
                    src: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/City-of-Malaga.jpg',
                    flex: 4
                },
                {
                    title: 'Pre-fab homes',
                    src: 'https://i2.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/01/rio-de-janeiro-brazil.jpg?fit=600%2C338&ssl=1',
                    flex: 4
                },
                {
                    title: 'Favorite road trips',
                    src: 'https://arrestedworld.com/wp-content/uploads/2019/03/Wroclaw.jpg',
                    flex: 4
                },
                {
                    title: 'Best airlines',
                    src: 'https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/64zv8aywut8l5elu_1576750207.jpeg?tr=w-812,h-464',
                    flex: 4
                },
                {
                    title: 'Pre-fab homes',
                    src: 'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    flex: 4
                },
                {
                    title: 'Favorite road trips',
                    src: 'https://i.pinimg.com/originals/b2/e7/fa/b2e7fa163fa823296b63abfa1f1e68e0.jpg',
                    flex: 4
                },
                {
                    title: 'Best airlines',
                    src: 'https://i.guim.co.uk/img/media/13c85e5caf405f1135c08c6da5100dc6d2b4ed8a/0_296_4740_2844/master/4740.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=76788befd84f68c6878aad5a5e5e66c1',
                    flex: 4
                },
                {
                    title: 'Pre-fab homes',
                    src: 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Portugal/Porto/porto-guide-lead-image.jpg?imwidth=450',
                    flex: 4
                },
                {
                    title: 'Favorite road trips',
                    src: 'https://d1q0twczwkl2ie.cloudfront.net/wp-content/uploads/2019/11/shutterstock_1414639229.jpg',
                    flex: 4
                },
                {
                    title: 'Best airlines',
                    src: 'https://eskipaper.com/images/skyscraper-wallpaper-1.jpg',
                    flex: 4
                },
                {
                    title: 'Pre-fab homes',
                    src: 'https://images.dailyhive.com/20190121105514/shutterstock_739779886.jpg',
                    flex: 4
                },
                {
                    title: 'Favorite road trips',
                    src: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/08/03/14/vancouver-getty.jpeg',
                    flex: 4
                },
                {
                    title: 'Best airlines',
                    src: 'https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/03/bigstock-Canadian-flag-in-front-of-view-169353395.jpg',
                    flex: 4
                },
                {
                    title: 'Pre-fab homes',
                    src: 'https://i.pinimg.com/originals/4e/1b/d0/4e1bd03564016c45b9c0bfc87d29416e.jpg',
                    flex: 4
                },
                {
                    title: 'Favorite road trips',
                    src: 'https://lh5.googleusercontent.com/proxy/brTNso_L3CGq3mI3vVjv2hfaqmE2Uu4H4LY_RQMSCFPUlzX3NB8tOPzNuRqbX2z9AMQqnADw0Q9c_iH6Jr17lTiviZgsKEIRiPpVQ2u2IPR9j_D4u-lmMCsrb-a5IO8',
                    flex: 4
                },
                {
                    title: 'Best airlines',
                    src: 'https://images.dailyhive.com/20181123104126/Vancouver-Skyline16.jpg',
                    flex: 4
                },
            ]
        })
    }
</script>

<style scoped>
.explore{
    margin-bottom: 10px;
    font-size: x-small;
}
</style>

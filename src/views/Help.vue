<template>
    <v-container>
        <div class="help">
            <h1>Help Center</h1>
        </div>

        <div>
            <div>
                <v-row style="height: 300px; background-color: #ffffff; border: solid 0.5px #c6c6c6; border-radius: 5px; margin: 20px auto">
                    <v-col cols="12" xs="12" md="6" style="text-align: left">
                        <h1 class="titleqs">Questions You May Have</h1>
                        <br/>
                        <v-btn text small color="primary" class="mb-3 ask">1. What names are allowed on GoingTo ?
                        </v-btn>
                        <v-btn text small color="primary" class="mb-3 ask">2. How do I choose what I get notifications
                            about
                            on GoingTo ?
                        </v-btn>
                        <v-btn text small color="primary" class="mb-3 ask">3. Where can I find my GoingTo settings ?
                        </v-btn>
                        <v-btn text small color="primary" class="mb-3 ask">4. How do I change or reset my GoingTo
                            password
                            ?
                        </v-btn>
                        <v-btn text small color="primary" class="ask">5. How do I choose what I get notifications about
                            on GoingTo
                            ?
                        </v-btn>

                    </v-col>
                    <v-col id="colhelp" cols="12" xs="12" md="6">
                        <img class="helpimg" src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/r_h14xM7bGE.png" alt=""/>
                    </v-col>
                </v-row>
                <v-row style=" max-height: 900px; background-color: #def2ff; margin: 20px auto; border-radius: 5px;">
                    <v-col cols="12" xs="12" style="text-align: left"><h1 class="titleqs">Popular Topics</h1></v-col>

                    <br/>
                    <v-col cols="12" xs="12">
                        <v-row style="padding: 15px">
                            <v-col class="poptopics" cols="6" xs="6" md="3">
                                <a>
                                    <v-img style="max-width: 110px;" class="mx-8 mt-3 mb-5"
                                           src="https://image.flaticon.com/icons/svg/2885/2885583.svg"/>
                                    <div style="text-align: left; padding: 10px">
                                        <h5 style="color: black; margin-bottom: 4px; margin-top: 4px">Your Profile and
                                            Settings</h5>
                                        <h6 style="font-weight: normal; color: dimgrey">Learn how to add a profile
                                            picture, edit your info and manage posts.</h6>
                                    </div>
                                </a>
                            </v-col>

                            <v-col class="poptopics" cols="6" xs="6" md="3">
                                <a>
                                    <v-img style="max-width: 110px;" class="mx-8 mt-3 mb-5"
                                           src="https://image.flaticon.com/icons/svg/3141/3141855.svg"/>
                                    <div style="text-align: left; padding: 10px">
                                        <h5 style="color: black; margin-bottom: 4px; margin-top: 4px">GoingTo for
                                            Businesses</h5>
                                        <h6 style="font-weight: normal; color: dimgrey">GoingTo gives your business an
                                            immersive storefront for people to explore your best products and
                                            services.</h6>
                                    </div>
                                </a>
                            </v-col>

                            <v-col class="poptopics" cols="6" xs="6" md="3">
                                <a>
                                    <v-img style="max-width: 110px;" class="mx-8 mt-3 mb-5"
                                           src="https://image.flaticon.com/icons/svg/2885/2885604.svg"/>
                                    <div style="text-align: left; padding: 10px">
                                        <h5 style="color: black; margin-bottom: 4px; margin-top: 4px">Notifications</h5>
                                        <h6 style="font-weight: normal; color: dimgrey">Change what you get
                                            notifications about on Facebook and decide how you get them.</h6>
                                    </div>
                                </a>
                            </v-col>

                            <v-col class="poptopics" cols="6" xs="6" md="3">
                                <a>
                                    <v-img style="max-width: 110px;" class="mx-8 mt-3 mb-5"
                                           src="https://www.flaticon.es/premium-icon/icons/svg/3113/3113142.svg"/>
                                    <div style="text-align: left; padding: 10px">
                                        <h5 style="color: black; margin-bottom: 4px; margin-top: 4px">Security</h5>
                                        <h6 style="font-weight: normal; color: dimgrey">We protect your Profile,
                                            Business and its contents. Accessible only with appropriate
                                            permissions.</h6>
                                    </div>
                                </a>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row style="margin: 20px auto;" class="px-3">
                    <v-col style="text-align: justify">

                        <h1 style="margin-top: 20px; margin-bottom: 5px; text-align: left">OUR COMMITMENT TO YOU</h1>
                        <h4 style="font-weight: normal">At GoingTo, your privacy is our top priority. Your privacy is
                            one
                            of the basic foundations that marks how we design and develop the services and products you
                            know, so that you can trust them completely and focus on establishing lasting relationships.

                            We appreciate that you trust us in providing us with your information, which we do not take
                            lightly.</h4>
                        <br/>
                        <h4>We don't put in risk your privacy.</h4>
                        <h4 style="font-weight: normal">We design all our products and services with your privacy in
                            mind. We have the collaboration of experts in different fields (legal, security,
                            engineering, product design, etc.) to ensure that no decision is made without respecting
                            your privacy.</h4>

                        <h1 style="margin-top: 20px; margin-bottom: 5px; text-align: left">PRIVACY POLICY</h1>
                        <h4 style="font-weight: normal">Welcome to the GoingTo Privacy Policy. Thanks for reading it and
                            taking a few minutes.

                            We appreciate you entrusting your information to us and we will try to deserve that trust at
                            all times. For this, the first step is that you know what information we collect, why we
                            collect it, how it is used and the options you have regarding your information. This Policy
                            describes our privacy practices in plain language, minimizing legal and technical
                            vocabulary.</h4>

                        <div style="margin-top: 20px">
                            <ul>
                                <li style="margin: 5px"><a style="font-weight: normal;"> 1. WHO WE ARE</a></li>
                                <li style="margin: 5px"><a style="font-weight: normal;"> 2. WHERE THIS PRIVACY POLICY
                                    APPLIES</a></li>
                                <li style="margin: 5px"><a style="font-weight: normal;"> 3. INFORMATION WE COLLECT</a>
                                </li>
                                <li style="margin: 5px"><a style="font-weight: normal;"> 4. COOKIES AND OTHER SIMILAR
                                    DATA COLLECTION TECHNOLOGIES</a></li>
                                <li style="margin: 5px"><a style="font-weight: normal;"> 5. HOW WE USE THE
                                    INFORMATION</a></li>
                                <li style="margin: 5px"><a style="font-weight: normal;"> 6. HOW WE SHARE INFORMATION</a>
                                </li>
                                <li style="margin: 5px"><a style="font-weight: normal;"> 7. CROSS-BORDER DATA
                                    TRANSFERS</a></li>
                                <li style="margin: 5px"><a style="font-weight: normal;"> 8. YOUR RIGHTS</a></li>
                                <li style="margin: 5px"><a style="font-weight: normal;"> 9. HOW WE PROTECT YOUR
                                    INFORMATION</a></li>
                                <li style="margin: 5px"><a style="font-weight: normal;"> 10. FOR HOW LONG DO WE KEEP
                                    YOUR INFORMATION</a></li>
                                <li style="margin: 5px"><a style="font-weight: normal;"> 11. CHANGES IN THE PRIVACY
                                    POLICY</a></li>
                                <li style="margin: 5px"><a style="font-weight: normal;"> 12. HOW TO CONTACT US</a></li>

                            </ul>
                        </div>

                        <h2 style="margin-top: 20px; margin-bottom: 5px">1. WHO WE ARE</h2>
                        <h4 style="font-weight: normal">we ....</h4>
                    </v-col>

                </v-row>
            </div>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: "Help"
    }
</script>

<style scoped>
    .help {
        margin-bottom: 10px;
        font-size: x-small;
    }

    .helpimg {
        width: 50%;
        position: center;
    }

    .ask {
        font-size: 10px;
    }

    .poptopics {
        background-color: white;
        border: solid 0.5px #dbdbdb;
        height: 270px;
        margin: -1px;
    }

    .titleqs {
        font-size: large;
    }

    @media (max-width: 600px) {
        .titleqs {
            font-size: x-large;
            margin-top: 6px;
        }

        .ask {
            font-size: 9px;
        }

        #colhelp {
            display: none;
        }
    }
</style>

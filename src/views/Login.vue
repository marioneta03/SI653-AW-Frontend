<template>
    <div class="col-md-12">
        <div class="card card-container">
            <img
                    id="profile-img"
                    alt="Profile Image"
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    class="profile-img-card"
            />
            <form name="form" @submit.prevent="handleLogin">
                <div style="margin-bottom: 1rem;">
                    <label for="email">Email</label>
                    <input
                            id="email"
                            v-model="user.email"
                            v-validate="'required'"
                            type="text"
                            class="form-control"
                            name="email"
                    />
                    <div
                            v-if="this.errors.has('username')"
                            class="alert alert-danger"
                            role="alert"
                    >
                        Username is required.
                    </div>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label for="password">Password</label>
                    <input
                            id="password"
                            v-model="user.password"
                            v-validate="'required'"
                            type="password"
                            class="form-control"
                            name="password"
                    />
                    <div
                            v-if="this.errors.has('password')"
                            class="alert alert-danger"
                            role="alert"
                    >
                        Password is required.
                    </div>
                </div>
                <div style="margin-bottom: 1rem;">
                    <button class="btn btn-primary btn-block" :disabled="loading">
                        <span v-show="loading" class="spinner-border spinner-border-sm" />
                        <span>Login</span>
                    </button>
                </div>
                <div style="margin-bottom: 1rem;">
                    <div v-if="message" class="alert alert-danger" role="alert">
                        {{ message }}
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import User from "@/models/user";

    export default {
        name: "Login",
        data() {
            return {
                user: new User("", "", "", ""),
                loading: false,
                message: "",
            };
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            },
        },
        created() {
            if (this.loggedIn) {
                this.$router.push("/profile");
            }
        },
        methods: {
            handleLogin() {
                this.loading = true;
                console.log("Starting Login handling");
                this.$validator.validateAll().then((isValid) => {
                    if (!isValid) {
                        this.loading = false;
                        return;
                    }
                    if (this.user.email && this.user.password) {
                        this.$store.dispatch("auth/login", this.user).then(
                            () => {
                                this.$router.push("/profile");
                            },
                            (error) => {
                                this.loading = false;
                                this.message =
                                    (error.response && error.response.data) ||
                                    error.message ||
                                    error.toString();
                            }
                        );
                    }
                });
            },
        },
    };
</script>

<style scoped>
    label {
        display: block;
        margin-top: 10px;
    }

    .card-container.card {
        max-width: 350px;
        padding: 40px 40px;
    }

    .card {
        background-color: #f7f7f7;
        padding: 20px 25px 30px;
        margin: 50px auto 25px;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    }

    .profile-img-card {
        width: 96px;
        height: 96px;
        margin: 0 auto 10px;
        display: block;
        -moz-border-radius: 50px;
        -webkit-border-radius: 50px;
        border-radius: 50px;
    }
</style>

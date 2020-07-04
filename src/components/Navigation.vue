<template>
    <nav id="nav">
        <router-link :to="{name:'Home'}" class="router-link-active">Home</router-link>
        |
        <router-link :to="{name:'search'}">Search</router-link>
        |
        <router-link :to="{name:'explore'}">Explore</router-link>
        |
        <router-link :to="{name:'favorite'}">Favorite</router-link>
        |
        <router-link :to="{name:'register'}">SignUp</router-link>
        |
        <router-link :to="{name:'login'}">LogIn</router-link>
        |
        <router-link :to="{name:'profile'}">Profile</router-link>
        |
        <router-link :to="{name:'help'}">Help</router-link>
        |
        <router-link :to="{name:'terms'}">Terms</router-link>
        |
        <router-link :to="{name:'error404'}">Error404</router-link>
    </nav>
</template>

<script>
    export default {
        name: "Navigation",
        data: () => ({

        }),
    }

</script>

<style scoped>
    #nav {
        padding: 16px 20px;
        height: 54px;
        background: rgb(174, 233, 238);
        background: linear-gradient(90deg, rgba(174, 233, 238, 1) 0%, rgba(148, 187, 233, 1) 100%);
    }

    #nav a {
        text-decoration: none;
        color: #ffffff;
    }

    #nav a.router-link-exact-active {
        font-weight: bold;
        color: #262626;
    }

</style>

import Vue from 'vue';

Vue.prototype.isLogin = function () {
    if (this.$store.getters['auth/isAuthenticated']) {
        return true
    }
    return false
}

Vue.prototype.getCurrentUser = function () {
    if (this.$store.getters['auth/isAuthenticated']) {
        return this.$store.getters['auth/getCurrentUser']
    }
}

export default Vue;

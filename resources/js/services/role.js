import Vue from 'vue';

Vue.prototype.is = function (value) {
    if (this.$store.getters['auth/getCurrentUser'].role == '') {
        return false
    }
    let roles = this.$store.getters['auth/getCurrentUser'].role
    let _return = false;
    if (value.includes('|')) {
        value.split('|').forEach(function (item) {
            if (roles.includes(item.trim())) {
                _return = true
            }
        })
    } else if (value.includes('&')) {
        _return = true
        value.split('&').forEach(function (item) {
            if (!roles.includes(item.trim())) {
                _return = false
            }
        })
    } else {
        _return = roles.includes(value.trim())
    }
    return _return
}

export default Vue;

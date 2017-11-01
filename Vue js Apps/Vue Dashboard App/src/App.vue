<template>
    <div>
        <AppHeader message="hello!"
        @searchFilter="searchFilterHandler"
        @locationChange="locationHandle" />
        <div class="result-container">
            <div>
                <h5>
                    Number of developers : {{positives}}
                </h5>
                <div class="app-results" v-if="list && list.length" >
                    <ul class="search-result-list" v-bind:key="data.name" v-for="data in list">
                        <li class="search-result-list-item">
                            <div class="profile">
                                <div class="profile-pic"><img v-bind:src="data.avatar" class="img-responsive"></div>
                                <div class="details">
                                    <h3 class="details-name">
                                        {{data.first_name}}
                                    </h3>
                                    <h3 class="details-txt">
                                        {{data.last_name}}
                                    </h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <AppFooter message="hello!" />
    </div>
</template>

<script type="text/ecmascript-6">
'use strict';
import header from './header.vue';
import footer from './footer.vue';
import axios from 'axios';

export default {
    components: {
        AppHeader : header,
        AppFooter : footer
    },
    data() {
    return {
      userList: [],
      list : [],
      errors: []
    }
  },
    watch: {
        data: {
            deep: true,
            handler() {
                localStorage.setItem('userList', JSON.stringify(this.userList));
            }
        }
    },
    events : {
        searchFilter : function(data){
            console.log(data+ "data coming .....");
        }
    },
    created () {
       axios.get('https://reqres.in/api/users').then(response => {
      // JSON responses are automatically parsed.
      this.userList = response.data.data;
      this.list = this.userList ;
    })
    .catch(e => {
      this.errors.push(e)
    })
    },
    computed: {
      positives () {
        return this.userList ? this.userList.length : 0;
      }
    },
    methods: {
        searchFilterHandler(data) {
            data = data.trim().toLowerCase();
           return this.list = this.userList.filter((_user)=>  _user.first_name.toLowerCase().match(data));
        },
        locationHandle(data) {
            console.log(data)
       }
    }
}
</script>

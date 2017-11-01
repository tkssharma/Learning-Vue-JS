<template>
 <div class="app-header">
  <div class="filters">
   <h3>
    {{headerTitle}}
    <span class="applied-filters">Applied Filters
    </span>
   </h3>
   <h5 class="filter-label">Showing Candidate From
    <span class="filter-action">(Remove Filters)</span>
   </h5>
   <div class="select-filters">
    <select v-model="location" @change="locationChange"  class="field-control" id="location">
     <option></option>
     <option>Bangalore</option>
     <option>Gurgaon</option>
     <option>Delhi</option>
     <option>Goa</option>
     <option>Mumbai</option>
    </select>
    <select v-model="company" @change="companyChange" class="field-control" id="company">
     <option></option>
     <option>IBM</option>
     <option>MS</option>
     <option>Mckinsey</option>
     <option>Amdocs</option>
     <option>UHG</option>
    </select>
   </div>
  </div>
  <div class="search"><input @change="filterData"
      v-model="searchText" type="text" placeholder="sort by name" id="name" class="field-control"></div>
 </div>
</template>
<<script>
export default {
    props: ['message'],
     data() {
            return {
                headerTitle : 'Candidate Search Filters !!'
            }
        },
        methods :{
            filterData(){
                 console.log('changed...');
                 this.$emit('searchFilter', this.searchText);
            },
            locationChange () {
                 console.log('changed...');
                 this.$emit('locationChange', this.location);
            },
            companyChange () {
                 this.$emit('companyChange', this.company);
            }
        }
}
</script>
<style>
body {
 font-size: 18px;
 background-color: rgba(204, 204, 204, 0.41);
 font-family: "Roboto", sans-serif !important;
 margin: 0px;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
 font-family: "Roboto", sans-serif !important;
 font-weight: 500;
 line-height: 1.1;
 margin-top: 5px !important;
 margin-bottom: 5px !important;
 color: inherit;
}

.app {
 display: flex;
 flex-direction: column;
}

h3 .applied-filters {
 font-size: 14px;
 color: rgba(39, 31, 31, 0.45);
}

.filter-action {
 color: #15c187;
 font-size: 14px;
 text-decoration: underline;
 margin-left: 30px;
}

.app-header {
 display: flex;
 justify-content: space-between;
 background-color: #ffffff;
 height: 140px;
 padding: 10px;
 color: black;
}

.app-header .search {
 margin-right: 100px;
 margin-top: 20px;
}

.app-header .search .search-field {
 position: relative;
 color: #555;
 display: block;
}

.select-filters {
 display: flex;
 flex-direction: row;
}

.filter-label {
 color: #15c187;
}

.field-control {
 display: block;
 width: 100%;
 height: 40px;
 width: 180px;
 padding: 6px 20px;
 font-size: 14px;
 line-height: 1.42857143;
 color: #555;
 background-color: #fff;
 background-image: none;
 border: 1px solid #c7bcb8;
 border-radius: 0px !important;
}

.displayData {
 text-align: center;
}

.result-container {
 padding: 10px;
 margin: auto;
 width: 70%;
 height: 100%;
 /* Modal Content/Box */
 /* The Close Button */
 /* Modal Header */
 /* Modal Body */
}

.result-container .result-container h5 {
 text-align: center;
 color: #9e9a9a;
}

.result-container .profile-pic {
 flex-grow: 0;
 order: 1;
 width: 100px;
 border-radius: 50px;
 height: auto;
}

.result-container .img-responsive {
 height: auto;
 width: 100px;
 border-radius: 50px;
}

.result-container .details {
 padding: 10px;
 order: 2;
 flex-grow: 2;
}

.result-container .modal_show {
 display: block;
 /* Hidden by default */
 position: fixed;
 /* Stay in place */
 z-index: 1;
 /* Sit on top */
 left: 0;
 top: 0;
 width: 100%;
 /* Full width */
 height: 100%;
 /* Full height */
 overflow: auto;
 /* Enable scroll if needed */
 background-color: black;
 /* Fallback color */
 background-color: rgba(0, 0, 0, 0.4);
 /* Black w/ opacity */
}

.result-container .modal_hide {
 display: none;
 /* Hidden by default */
 position: fixed;
 /* Stay in place */
 z-index: 1;
 /* Sit on top */
 left: 0;
 top: 0;
 width: 100%;
 /* Full width */
 height: 100%;
 /* Full height */
 overflow: auto;
 /* Enable scroll if needed */
 background-color: black;
 /* Fallback color */
 background-color: rgba(0, 0, 0, 0.4);
 /* Black w/ opacity */
}

.result-container .modal-content {
 background-color: #ffffff;
 margin: 15% auto;
 /* 15% from the top and centered */
 padding: 20px;
 border: 1px solid #888;
 width: 80%;
 /* Could be more or less, depending on screen size */
}

.result-container .close {
 color: #aaa;
 float: right;
 font-size: 28px;
 font-weight: bold;
}

.result-container .modal-header {
 padding: 2px 16px;
 background-color: #5cb85c;
 color: white;
}

.result-container .modal-body {
 padding: 2px 16px;
}

.result-container .close:hover,
.result-container .close:focus {
 color: black;
 text-decoration: none;
 cursor: pointer;
}

.app-results {
 margin-top: 20px;
 max-height: 650px;
 overflow-x: scroll;
 background-color: #fff;
}

.app-intro {
 font-size: large;
}

.footer {
 height: 70px;
 background-color: #ccc;
}

.footer h4 {
 vertical-align: middle;
 text-align: center;
}

.search-result-list {
 list-style: none;
 margin: 0px;
 padding: 0px;
}

.search-result-list .search-result-list-item {
 border-bottom: solid 5px rgba(204, 204, 204, 0.19);
}

.search-result-list .search-result-list-item .profile {
 display: flex;
 padding: 20px;
 border-bottom: 2px solid #ccc;
 order: 1;
 flex-direction: row;
}

.search-result-list .search-result-list-item .profile:hover,
.search-result-list .search-result-list-item .profile:active {
 background-color: #ccc;
}

.search-result-list .search-result-list-item .profile .profile-pic {
 flex-grow: 0;
 order: 1;
 width: 100px;
 border-radius: 50px;
 height: auto;
}

.search-result-list .search-result-list-item .profile .img-responsive {
 height: auto;
 width: 100px;
 border-radius: 50px;
}

.search-result-list .search-result-list-item .profile .details {
 padding: 10px;
 order: 2;
 margin-left: 30px;
 flex-grow: 2;
}
.field-control {
    display: block;
    width: 100%;
    height: 40px;
    width: 180px;
    padding: 6px 20px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #c7bcb8;
    border-radius: 0px !important;
}
.field-control {
    display: block;
    width: 100%;
    height: 40px;
    width: 180px;
    padding: 6px 20px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #c7bcb8;
    border-radius: 0px !important;
}
.details-name {
 color: #2ac694;
}

.details-txt {
 font-size: 18px;
 color: rgba(6, 6, 6, 0.38);
}

@keyframes App-logo-spin {
 from {
  transform: rotate(0deg);
 }
 to {
  transform: rotate(360deg);
 }
}
</style>



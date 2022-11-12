<template>

  <div class="overflow-hidden rounded-lg shadow-xs border h-full">
    <button
        v-if="showBack"
        class="btn btn-blue mb-2 flex flex-row justify-between w-24"
        @click="goBack()"
    >
      <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
        />
      </svg>
      Back
    </button>
    <div class="flex flex-wrap justify-between py-4 px-2 bg-white">
      <div
          class="relative col-span-4 max-w-xl focus-within:text-science-blue-500"
      >
        <div class="absolute top-2 flex items-center pl-2">
          <svg
              aria-hidden="true"
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
          >
            <path
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
            v-model="searchTerm"
            aria-label="Search"
            class="w-fit pl-8 pr-2 text-sm text-black border h-8
             border-science-blue rounded-md form-input"
            placeholder="Search"
            type="text"
            @focus="indexMyItems"
            @keyup="searchLoadedData"
        />
      </div>

      <div class="col-span-2"></div>

      <div class="col-span-6 flex flex-wrap justify-end">
        <div class="flex flex-row space-x-4 mb-2">
          <slot name="actions"></slot>
          <router-link
              v-if="createRouteName !== ''"
              :to="{ name: createRouteName, params: {} }"
              class="btn btn-blue"
          >
            <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
              ></path>
            </svg>
            {{new_item}}
          </router-link>
          <router-link
              v-if="show_extra_route"
              :to="{ name: extraRoute, params: {} }"
              class="btn btn-blue"
          >
            <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
              ></path>
            </svg>
            {{route_name}}
          </router-link>
          <button
              v-if="showRefresh"
              class="btn btn-blue flex flex-row justify-between space-x-2 items-center"
              @click="fetchData()"
          >
            <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
              ></path>
            </svg>
            <span>Refresh</span>
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="align-middle inline-block min-w-full">
          <div class="shadow overflow-auto">

            <table
                class="table-auto min-w-full divide-y divide-gray-200 border-2 overflow-auto hidden md:table"
            >
              <thead class="bg-gray-100 border-2 sticky top-0 " >
              <tr class="border">
                <th
                    v-for="table_heading in table_headings"
                    :key="table_heading"
                    class="h-10 text-left text-xs font-medium text-gray-500 capitalize border border-2"
                    scope="col"
                >
                  {{ table_heading }}
                </th>
              </tr>
              </thead>

              <tbody
                  v-if="page_result?.length > 0 && !loading"
                  class="bg-white divide-y divide-gray-200 overflow-auto text-sm "
              >
              <tr
                  v-for="(item, index) in page_result"
                  :key="item"
                  class="hover:bg-gray-100 h-8"
              >
                <slot
                    v-if="
                      showableIndices.indexOf(index) !== -1 ||
                      showableIndices[0] === -1
                    "
                    class="p-0"
                    v-bind:index="index + 1"
                    v-bind:item="item"
                ></slot>
              </tr>
              </tbody>
              <tbody
                  v-if="loading"
                  class="bg-white divide-y divide-gray-200 overflow-auto"
              >
              <tr class="text-gray-600 dark:text-gray-400 border">
                <td
                    v-for="heading in Math.ceil(table_headings.length / 2) - 1"
                    :key="heading"
                ></td>
                <td class="p-4 text-center" colspan="100%">
                  <BaseLoader></BaseLoader>
                </td>
              </tr>
              </tbody>
              <tbody
                  v-if="!loading && page_result?.length < 1"
                  class="bg-white divide-y divide-gray-200"
              >
              <tr class="text-gray-600 dark:text-gray-400 border">
                <td
                    v-for="heading in Math.ceil(table_headings.length / 2) - 1"
                    :key="heading"
                    style="width: 1%; white-space: nowrap"
                ></td>
                <td class="text-center p-4" colspan="90%">
                  No Data Was Found
                </td>
              </tr>
              </tbody>
            </table>

            <div class="border md:hidden ">


              <div
                  v-if="page_result?.length > 0 && !loading"
                  class="stacked capitalize py-2"
              >

<!--                row-->
                  <div
                      v-for="(item, index) in page_result"
                      :key="item"
                      class="hover:bg-gray-100 stacked
                      border shadow w-10/12 mx-auto rounded-lg p-2 hover:bg-gray-50"
                  >


                    <slot class=""
                          v-if="
                        showableIndices.indexOf(index) !== -1 ||
                        showableIndices[0] === -1
                      "
                          v-bind:index="index + 1"
                          v-bind:item="item"
                    ></slot>
                  </div>



              </div>
            </div>









          </div>
        </div>
      </div>
    </div>

    <div
        class="bg-white py-3 px-2 tracking-wide text-gray-500  dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-200"
    >
      <BaseLoader v-if="loading"></BaseLoader>
    </div>
  </div>
  <router-view/>
</template>

<script>
import { removeWhiteSpaces } from "../../utils/functions"
import BaseLoader from "./BaseLoader.vue";

export default {
  name: "BaseDataPage",
  components: {
    BaseLoader

  },
  data () {
    return {
      currentPage: 1,
      page_result: {},
      loading: true,
      indexedItems: [],
      searchTerm: "",
      showableIndices: [-1],
      indexed: false
    }
  },
  props: {
    table_headings: {
      type: Array,
      default: () => {
        return []
      }
    },
    showBack: {
      type: Boolean,
      default: false
    },
    showRefresh: {
      type: Boolean,
      default: false
    },
    vuex_fetch_action: {
      type: String,
      default: ""
    },
    objectName: {
      type: String,
      required: true
    },
    vuexModule: {
      type: String,
      default: null
    },
    vuex_action_type: {
      type: String,
      default: "FETCH"
    },
    // page_results: {
    //   type: Array,
    //   default: () => {
    //     return []
    //   }
    // },
    serverRoute: {
      type: String,
      default: ""
    },
    createRouteName: {
      type: String,
      default: ""
    },
    fetchUrl: {
      type: String,
      default: "rooms"
    },
    extraRoute: {
      type: String,
      default: "rooms"
    },
    route_name:{
      type: String,
      default: "rooms"
    },
    show_extra_route: {
      type:Boolean,
      default : false
    },
    new_item:{
      type: String,
      default: "New"
    }

  },

  methods: {
    changePage () {
      this.currentPage = +1
    },
    goBack () {
      this.$router.back()
    },
    fetchData(){
      this.loading = true
      const payload ={ url: this.fetchUrl}

      this.$store.dispatch('fetchData',payload)
          .then(response =>{
            this.loading = false
            this.page_result = response.data
            this.results = response.data
            // console.log(this.page_result, 'results')
          })
          .catch(err=>{
            alert(err.message)
          })
    },
    indexMyItems () {
      if (!this.indexed) {
        let indexedItems = []
        this.page_result.map((item, index) => {
          let searchableString = ""
          let keys = Object.keys(item)
          keys.map((key) => {
            searchableString += item[key]
          })
          indexedItems.push({
            index: index,
            value: searchableString
          })
        })
        this.indexedItems = indexedItems
        this.indexed = false
      }
    },
    searchLoadedData () {
      if (this.searchTerm === "") {
        this.showableIndices = [-1]
      } else {
        let foundIndices = []
        this.indexedItems.map((item) => {
          if (
              removeWhiteSpaces(item.value.toLowerCase()).indexOf(
                  removeWhiteSpaces(this.searchTerm.toLowerCase())
              ) !== -1
          ) {
            foundIndices.push(item.index)
          }
        })
        this.showableIndices = foundIndices
      }
    }
  },
  mounted () {
    this.fetchData(this.vuex_payload)
  },
  watch: {
    $route(to,from){
      setTimeout(this.fetchData(),
          2000)

    }
  }
}
</script>

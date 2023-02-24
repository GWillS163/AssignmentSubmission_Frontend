<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
  @change="onPageChange"
    ></b-pagination>

<p class="mt-3">Current Page: {{ currentPage }}</p>
    <p class="mt-4"> {{items}}</p>

<b-table
  id="my-table"
  :items="items"
  :fields="fields"
  :per-page="perPage"
  :current-page="currentPage"
></b-table>
  </div>
</template>
<script>
  export default {
    data() {

     const items=[
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 33, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
          { id: 10, first_name: 'Dino', last_name: null },
          { id: 11, first_name: 'Hoppy', last_name: 'Rabbit' },
          { id: 12, first_name: 'Buster', last_name: 'Rabbit' },
          { id: 13, first_name: 'Bugs', last_name: 'Bunny' },
          { id: 14, first_name: 'Daffy', last_name: 'Duck' },
          { id: 15, first_name: 'Wile', last_name: 'E. Coyote' },
          { id: 16, first_name: 'Road', last_name: 'Runner' },
        ];
      return {
        perPage: 3,
        currentPage: 2,
        fields: [
          { key: 'id', label: 'ID' , sortable: true},
          { key: 'first_name', label: 'First Name' , sortable: true},
          { key: 'last_name', label: 'Last Name' , sortable: true}
        ],
        items
      }
    },
    computed: {
      rows() {
        return this.items.length
      },
      pagedItems() {
        // const start = (this.currentPage - 1) * this.perPage;
        // const end = start + this.perPage;
        // return this.items.slice(start, end);
        const newItems = this.items.slice(0, this.items.length);
        console.log(this.items.length)
        return newItems;
      },
      onPageChange() {
        console.log('Current page changed to', this.currentPage)
      }
    } ,
    watch: {
      currentPage() {
        console.log('Current page changed to', this.currentPage)
      }
    }
  }
</script>
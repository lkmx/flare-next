<template>
  <div class="simple-table">
    <table>
      <thead>
        <tr>
          <th v-for="column in sortedColumns" :key="column.position">{{ column.header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in slicedData" :key="index">
          <td v-for="column in sortedColumns" :key="column.position">
            <slot :name="column.name" v-bind:row="row">{{ valueOf(row, column) }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
    <ul class="simple-table__pagination" v-if="config.pagination.enabled">
      <li><button @click="setPage(currentPage - 1)">&lt;</button></li>
      <li v-for="page in totalPages" :key="page" :class="{ 'simple-table__pagination--selected': page - 1 === currentPage }">
        <button @click="setPage(page - 1)">{{ page }}</button>
      </li>
      <li><button @click="setPage(currentPage + 1)">&gt;</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentPage: 0,
      searchTerm: '',
    }
  },
  methods: {
    valueOf(row, column) {
      if (!row[column.name]) return ''
      const formatter = column['formatter']
      if (!formatter) return row[column.name]
      return formatter(row[column.name])
    },
    setPage(page) {
      console.log(page)
      if (page < 0 || page > this.totalPages - 1) return
      this.currentPage = page
    }
  },
  computed: {
    sortedColumns() {
      return this.config.columns.sort((a, b) => a.position - b.position)
    },
    filteredData() {
      return this.data.filter(row => {
        return Object.keys(row).some(column => {
          const columnValue = row[column].toString().toLowerCase()
          const searchTerm = this.searchTerm.toLowerCase()
          return columnValue.match(searchTerm) != null
        })
      })
    },
    slicedData() {
      const perPage = this.config.pagination.enabled ? this.config.pagination.perPage : this.data.length 
      const start = this.currentPage * perPage
      const end = start + perPage
      return this.filteredData.slice(start, end)
    },
    totalPages() {
      const totalRows = this.filteredData.length
      const { perPage } = this.config.pagination
      return Math.ceil(totalRows / perPage)
    }
  }
}
</script>

<style lang="scss" scoped>
.simple-table {
  table {
    width: 100%;

    thead {
      th {
        background-color: $table-cell-heading-color; 
      }
    }

    tbody {
      tr {
        &:hover {
          background-color: $table-row-hover-background-color;
        }
      }
    }

    td, th {
      border: $table-cell-border;
      padding: $table-cell-padding;
    }
  }

  &__pagination {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-column-gap: $table-pagination-items-gap;
    margin-top: $table-pagination-margin-top;
    justify-content: $table-pagination-justify;

    &--selected {
      color: $table-pagination-item-selected-color;
    }
  }
}
</style>

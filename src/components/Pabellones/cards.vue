<template>
    <div class="bg-gray-100 py-8">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Mostrar los cards correspondientes a la página actual -->
          <div v-for="(card, index) in displayedCards" :key="index" class="bg-white shadow-md rounded-md overflow-hidden">
            <img :src="card.imageUrl" alt="Card Image" class="w-full h-48 object-cover">
            <div class="px-4 py-2">
              <h3 class="text-lg font-medium text-gray-900">{{ card.title }}</h3>
              <p class="text-gray-500">{{ card.description }}</p>
            </div>
          </div>
        </div>
        <!-- Mostrar el botón "Cargar más" si hay más tarjetas que mostrar -->
        <div v-if="showLoadMoreButton" class="flex justify-center mt-4">
          <button @click="loadMore" class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md">
            Cargar más
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Paginate from 'vuejs-paginate';
  
  export default {
    components: {
      Paginate,
    },
    data() {
      return {
        cards: [
          {
            title: 'Título del primer card',
            description: 'Descripción del primer card',
            imageUrl: 'https://via.placeholder.com/640x360.png',
          },
          {
            title: 'Título del segundo card',
            description: 'Descripción del segundo card',
            imageUrl: 'https://via.placeholder.com/640x360.png',
          },
          {
            title: 'Título del segundo card',
            description: 'Descripción del segundo card',
            imageUrl: 'https://via.placeholder.com/640x360.png',
          },
          {
            title: 'Título del segundo card',
            description: 'Descripción del segundo card',
            imageUrl: 'https://via.placeholder.com/640x360.png',
          },
          {
            title: 'Título del segundo card',
            description: 'Descripción del segundo card',
            imageUrl: 'https://via.placeholder.com/640x360.png',
          },
          {
            title: 'Título del segundo card',
            description: 'Descripción del segundo card',
            imageUrl: 'https://via.placeholder.com/640x360.png',
          },
          {
            title: 'Título del segundo card',
            description: 'Descripción del segundo card',
            imageUrl: 'https://via.placeholder.com/640x360.png',
          },
          {
            title: 'Título del segundo card',
            description: 'Descripción del segundo card',
            imageUrl: 'https://via.placeholder.com/640x360.png',
          },
          {
            title: 'Título del segundo card',
            description: 'Descripción del segundo card',
            imageUrl: 'https://via.placeholder.com/640x360.png',
          },
          
          // Agregar más cards aquí
        ],
        currentPage: 1,
        cardsPerPage: 4,
      };
    },
    computed: {
      displayedCards() {
        const startIndex = (this.currentPage - 1) * this.cardsPerPage;
        const endIndex = startIndex + this.cardsPerPage;
        return this.cards.slice(startIndex, endIndex);
      },
      totalPages() {
        return Math.ceil(this.cards.length / this.cardsPerPage);
      },
      showLoadMoreButton() {
        return this.cards.length > this.displayedCards.length;
      },
    },
    methods: {
      changePage(pageNumber) {
        this.currentPage = pageNumber;
      },
      loadMore() {
        this.cardsPerPage += 4;
      },
    },
  };
  </script>
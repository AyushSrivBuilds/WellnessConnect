<template>
  <div class="section-padding py-12">
    <div class="container-max">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Find Wellness Professionals
        </h1>
        <p class="text-xl text-gray-600">
          Browse through our network of certified wellness professionals
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Filters Sidebar -->
        <div class="lg:col-span-1">
          <div class="card sticky top-24">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
            
            <!-- Search -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input 
                v-model="filters.search"
                type="text" 
                placeholder="Search by name or specialty"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <!-- Category -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select 
                v-model="filters.category"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Categories</option>
                <option value="yoga">Yoga Instruction</option>
                <option value="wellness">Wellness Coaching</option>
                <option value="nutrition">Nutrition</option>
                <option value="fitness">Fitness Training</option>
              </select>
            </div>

            <!-- Location -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input 
                v-model="filters.location"
                type="text" 
                placeholder="Enter city or zip code"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <!-- Price Range -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Price Range: ${{ filters.priceRange[0] }} - ${{ filters.priceRange[1] }}/hour
              </label>
              <input 
                v-model="filters.priceRange[0]"
                type="range" 
                min="25" 
                max="200" 
                class="w-full mb-2"
              />
              <input 
                v-model="filters.priceRange[1]"
                type="range" 
                min="25" 
                max="200" 
                class="w-full"
              />
            </div>

            <!-- Rating -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
              <select 
                v-model="filters.rating"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="0">Any Rating</option>
                <option value="4">4+ Stars</option>
                <option value="4.5">4.5+ Stars</option>
                <option value="4.8">4.8+ Stars</option>
              </select>
            </div>

            <button @click="clearFilters" class="w-full btn-outline">
              Clear Filters
            </button>
          </div>
        </div>

        <!-- Results -->
        <div class="lg:col-span-3">
          <!-- Sort and Results Count -->
          <div class="flex flex-col sm:flex-row justify-between items-center mb-6">
            <p class="text-gray-600 mb-4 sm:mb-0">
              Showing {{ filteredProfessionals.length }} of {{ professionals.length }} professionals
            </p>
            <select 
              v-model="sortBy"
              class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="reviews">Most Reviews</option>
            </select>
          </div>

          <!-- Professional Cards -->
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div v-for="professional in paginatedProfessionals" :key="professional.id" class="card hover:shadow-xl transition-all duration-300">
              <div class="flex items-start space-x-4">
                <img 
                  :src="professional.image" 
                  :alt="professional.name"
                  class="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div class="flex-1 min-w-0">
                  <div class="flex items-start justify-between">
                    <div>
                      <h3 class="text-lg font-semibold text-gray-900">{{ professional.name }}</h3>
                      <p class="text-primary-600 font-medium">{{ professional.specialty }}</p>
                      <p class="text-sm text-gray-500">{{ professional.location }}</p>
                    </div>
                    <div class="text-right flex-shrink-0">
                      <div class="text-lg font-semibold text-gray-900 mb-1">
                        ${{ professional.rate }}/hr
                      </div>
                      <div class="flex items-center">
                        <div class="flex text-yellow-400 mr-1">
                          <StarIcon v-for="i in 5" :key="i" class="h-4 w-4 fill-current" />
                        </div>
                        <span class="text-sm text-gray-600">{{ professional.rating }}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p class="text-gray-600 text-sm mt-2 line-clamp-2">{{ professional.bio }}</p>
                  
                  <div class="flex flex-wrap gap-2 mt-3">
                    <span 
                      v-for="skill in professional.skills.slice(0, 3)" 
                      :key="skill"
                      class="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full"
                    >
                      {{ skill }}
                    </span>
                  </div>
                  
                  <div class="flex items-center justify-between mt-4">
                    <div class="text-sm text-gray-500">
                      {{ professional.reviews }} reviews • {{ professional.experience }} years exp.
                    </div>
                    <div class="flex space-x-2">
                      <NuxtLink 
                        :to="`/professionals/${professional.id}`"
                        class="btn-outline text-sm px-4 py-2"
                      >
                        View Profile
                      </NuxtLink>
                      <button class="btn-primary text-sm px-4 py-2">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="flex justify-center mt-8">
            <nav class="flex space-x-2">
              <button 
                @click="currentPage = Math.max(1, currentPage - 1)"
                :disabled="currentPage === 1"
                class="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              <button 
                v-for="page in visiblePages" 
                :key="page"
                @click="currentPage = page"
                :class="[
                  'px-4 py-2 border rounded-lg',
                  currentPage === page 
                    ? 'bg-primary-600 text-white border-primary-600' 
                    : 'border-gray-300 hover:bg-gray-50'
                ]"
              >
                {{ page }}
              </button>
              <button 
                @click="currentPage = Math.min(totalPages, currentPage + 1)"
                :disabled="currentPage === totalPages"
                class="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid'

// SEO
useHead({
  title: 'Find Wellness Professionals - WellnessConnect',
  meta: [
    { name: 'description', content: 'Browse certified wellness professionals near you. Find yoga instructors, wellness coaches, and nutritionists.' }
  ]
})

// Reactive data
const filters = ref({
  search: '',
  category: '',
  location: '',
  priceRange: [25, 200],
  rating: 0
})

const sortBy = ref('rating')
const currentPage = ref(1)
const itemsPerPage = 6

// Sample data - this would come from API
const professionals = ref([
  {
    id: 1,
    name: 'Sarah Johnson',
    specialty: 'Yoga Instructor',
    location: 'San Francisco, CA',
    bio: 'Certified Hatha and Vinyasa yoga instructor with 8 years of experience helping clients improve flexibility and mindfulness through personalized practice.',
    image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4.9,
    reviews: 127,
    rate: 75,
    experience: 8,
    skills: ['Hatha Yoga', 'Vinyasa', 'Meditation', 'Breathwork']
  },
  {
    id: 2,
    name: 'Michael Chen',
    specialty: 'Wellness Coach',
    location: 'New York, NY',
    bio: 'Holistic wellness coach specializing in stress management and lifestyle optimization for busy professionals seeking work-life balance.',
    image: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4.8,
    reviews: 89,
    rate: 90,
    experience: 6,
    skills: ['Stress Management', 'Life Coaching', 'Mindfulness', 'Goal Setting']
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Nutritionist',
    location: 'Los Angeles, CA',
    bio: 'Registered dietitian with expertise in plant-based nutrition and sustainable eating habits for optimal health and longevity.',
    image: 'https://images.pexels.com/photos/3823509/pexels-photo-3823509.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5.0,
    reviews: 156,
    rate: 120,
    experience: 10,
    skills: ['Plant-Based Nutrition', 'Weight Management', 'Sports Nutrition', 'Meal Planning']
  },
  {
    id: 4,
    name: 'David Kim',
    specialty: 'Fitness Trainer',
    location: 'Chicago, IL',
    bio: 'Certified personal trainer focused on functional fitness and strength training for all fitness levels and ages.',
    image: 'https://images.pexels.com/photos/3823511/pexels-photo-3823511.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4.7,
    reviews: 93,
    rate: 80,
    experience: 5,
    skills: ['Strength Training', 'Functional Fitness', 'HIIT', 'Mobility']
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    specialty: 'Wellness Coach',
    location: 'Austin, TX',
    bio: 'Experienced wellness coach helping clients develop sustainable healthy habits and overcome limiting beliefs.',
    image: 'https://images.pexels.com/photos/3823513/pexels-photo-3823513.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4.9,
    reviews: 112,
    rate: 85,
    experience: 7,
    skills: ['Habit Formation', 'Mindset Coaching', 'Nutrition Coaching', 'Accountability']
  },
  {
    id: 6,
    name: 'James Wilson',
    specialty: 'Yoga Instructor',
    location: 'Seattle, WA',
    bio: 'Advanced yoga practitioner specializing in Ashtanga and power yoga for building strength and flexibility.',
    image: 'https://images.pexels.com/photos/3823515/pexels-photo-3823515.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4.6,
    reviews: 78,
    rate: 70,
    experience: 4,
    skills: ['Ashtanga Yoga', 'Power Yoga', 'Alignment', 'Philosophy']
  }
])

// Computed properties
const filteredProfessionals = computed(() => {
  let filtered = professionals.value

  // Search filter
  if (filters.value.search) {
    const search = filters.value.search.toLowerCase()
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(search) || 
      p.specialty.toLowerCase().includes(search) ||
      p.skills.some(skill => skill.toLowerCase().includes(search))
    )
  }

  // Category filter
  if (filters.value.category) {
    filtered = filtered.filter(p => {
      const category = filters.value.category.toLowerCase()
      return p.specialty.toLowerCase().includes(category)
    })
  }

  // Location filter
  if (filters.value.location) {
    const location = filters.value.location.toLowerCase()
    filtered = filtered.filter(p => 
      p.location.toLowerCase().includes(location)
    )
  }

  // Price range filter
  filtered = filtered.filter(p => 
    p.rate >= filters.value.priceRange[0] && 
    p.rate <= filters.value.priceRange[1]
  )

  // Rating filter
  if (filters.value.rating > 0) {
    filtered = filtered.filter(p => p.rating >= filters.value.rating)
  }

  // Sort
  filtered.sort((a, b) => {
    switch (sortBy.value) {
      case 'rating':
        return b.rating - a.rating
      case 'price-low':
        return a.rate - b.rate
      case 'price-high':
        return b.rate - a.rate
      case 'reviews':
        return b.reviews - a.reviews
      default:
        return 0
    }
  })

  return filtered
})

const totalPages = computed(() => Math.ceil(filteredProfessionals.value.length / itemsPerPage))

const paginatedProfessionals = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProfessionals.value.slice(start, end)
})

const visiblePages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value
  
  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    if (current <= 4) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i)
      }
      pages.push('...', total)
    } else if (current >= total - 3) {
      pages.push(1, '...')
      for (let i = total - 4; i <= total; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1, '...')
      for (let i = current - 1; i <= current + 1; i++) {
        pages.push(i)
      }
      pages.push('...', total)
    }
  }
  
  return pages.filter(p => p !== '...' || pages.indexOf(p) === pages.lastIndexOf(p))
})

// Methods
const clearFilters = () => {
  filters.value = {
    search: '',
    category: '',
    location: '',
    priceRange: [25, 200],
    rating: 0
  }
  currentPage.value = 1
}

// Watch for filter changes to reset pagination
watch(() => [filters.value, sortBy.value], () => {
  currentPage.value = 1
}, { deep: true })
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
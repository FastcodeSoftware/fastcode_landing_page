<script setup>
import { ref } from 'vue'
import fastcodeBanner from '../assets/fastcode_banner.jpg'
import fastcodeIcon from '../assets/fastcode_logo.png'

const services = [
  { title: 'เงื่อนไข', icon: 'mdi-check-decagram', content: 'ติดต่อสั่งงานผ่านไลน์เท่านั้น (@214xxhec)' },
  { title: 'ทีมงาน', icon: 'mdi-account-group', content: 'ทีมงานของเรามีประสบการณ์ทางด้านการเขียนโปรแกรมและนวัฒกรรมชั้นแนวหน้าของไทย' },
  {
    title: 'เรทราคา', icon: 'mdi-cash-multiple', content:
      `1.รับเขียนโปรแกรม เริ่มต้น: 75 บาท/โปรแกรม
  2.รับทำโปรเจ็ค เริ่มต้น: 500 บาท/โปรเจ็ค
  3.รับปรึกษางาน เริ่มต้น: 250 บาท/ชั่วโมง
  `},
  { title: 'ติดต่อฉุกเฉิน', icon: 'mdi-phone-alert', content: 'ติดต่อด่วนผ่านโทรศัพท์หรือ LINE ในกรณีฉุกเฉิน' },
]

const contactLinks = [
  { icon: 'mdi-twitter', label: 'X', href: 'https://twitter.com/your_account' },
  { icon: 'mdi-instagram', label: 'IG', href: 'https://instagram.com/your_account' },
  { icon: 'mdi-facebook', label: 'FB', href: 'https://facebook.com/your_page' },
  { icon: 'mdi-line', label: 'Line', href: 'https://line.me/R/ti/p/@214xxhec' },
]

// Define arrays for work examples and customer reviews
const workExamples = [
  { title: 'โปรแกรม', description: `รายละเอียด: โปรแกรมคำนวณค่าค่าฟิโบนาชี่ ด้วยภาษา C
  กำหนดส่ง: 25/1/2025
  ` },
  { title: 'โปรเจ็ค', description: `รายละเอียด: โปรเจ็คเว็ปแอพลิเคชั่น AI ตรวจภาพมะเร็งหู
  กำหนดส่ง: 25/1/2025` },
  { title: 'ปรึกษา', description: `รายละเอียด: ปรึกษารายละเอียดนวัตกรรมทางด้านเทคโนโลยีสุขภาพ
  กำหนดวันปรึกษา: 25/1/2025 ตอน 16:00-18:00น.` },
]

const customerReviews = [
  { title: 'รีวิว 1', description: 'รายละเอียดสั้น ๆ ของรีวิว 1', image: 'https://via.placeholder.com/300x200' },
  { title: 'รีวิว 2', description: 'รายละเอียดสั้น ๆ ของรีวิว 2', image: 'https://via.placeholder.com/300x200' },
  { title: 'รีวิว 3', description: 'รายละเอียดสั้น ๆ ของรีวิว 3', image: 'https://via.placeholder.com/300x200' },
]

const showBanner = ref(true)
</script>

<template>
  <!-- Top Banner -->
  <v-img :src="fastcodeBanner" alt="Top Banner Image" width="100%" class="top-banner" cover>
  </v-img>

  <!-- Cards Between Banner and Body -->
  <v-container fluid class="py-4" style="margin-top: -10rem">
    <v-row class="justify-center" dense>
      <!-- Card 1: รับเขียนโค้ด -->
      <v-col cols="3" sm="3">
        <v-card class="py-15 text-center" rounded elevation="2">
          <v-icon size="48" class="mb-2">mdi-code-tags</v-icon>
          <h3 class="mb-2 font-weight-bold">รับเขียนโค้ด</h3>
          <p>บริการพัฒนาโค้ดตามความต้องการของคุณ</p>
        </v-card>
      </v-col>

      <!-- Card 2: รับทำโปรเจ็ค -->
      <v-col cols="3" sm="3">
        <v-card class="py-15 text-center" rounded elevation="2">
          <v-icon size="48" class="mb-2">mdi-briefcase-check</v-icon>
          <h3 class="mb-2 font-weight-bold">รับทำโปรเจ็ค</h3>
          <p>จัดทำโปรเจ็กต์ขนาดเล็กจนถึงระบบใหญ่</p>
        </v-card>
      </v-col>

      <!-- Card 3: รับปรึกษางาน -->
      <v-col cols="3" sm="3">
        <v-card class="py-15 text-center" rounded elevation="2">
          <v-icon size="48" class="mb-2">mdi-account-tie</v-icon>
          <h3 class="mb-2 font-weight-bold">รับปรึกษางาน</h3>
          <p>ให้คำปรึกษา แนะนำแนวทางการพัฒนาโปรเจ็กต์</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>


  <v-container fluid class="py-10">
    <!-- Hero Section -->
    <v-row class="align-center justify-center text-center">
      <v-col cols="3" md="2">
        <v-img :src="fastcodeIcon" width="100%"></v-img>
      </v-col>
      <v-col cols="12" md="7">

        <h2 class="subtitle-1 mb-6">รับจ้างเขียนโค้ด - โปรเจ็ค - ปรึกษางาน</h2>
        <p class="mb-8">
          เราพร้อมให้บริการด้วยความน่าเชื่อถือและคุณภาพ
          ไม่ว่าจะเป็นงานเว็บไซต์ แอปพลิเคชัน หรือระบบซับซ้อน เราพร้อมตอบโจทย์
          ความต้องการของคุณ
        </p>
        <v-btn color="primary" class="mx-2 px-10" style="text-align: center;" elevation="1" href="https://line.me/R/ti/p/@214xxhec">สั่งงาน</v-btn>
      </v-col>
    </v-row>

    <!-- Services Section -->
    <v-row class="mt-12" align="stretch" justify="center" dense>
      <v-col cols="12" md="8">
        <h2 class="mb-4 text-h4 font-weight-medium text--primary">เกี่ยวกับ Fast Code</h2>
        <!-- Use Expansion Panels -->
        <v-expansion-panels variant="accordion" multiple elevation="2" rounded>
          <v-expansion-panel v-for="(service, i) in services" :key="i" class="mb-2">
            <v-expansion-panel-title>
              <v-icon left class="mr-2" :color="'primary'">{{ service.icon }}</v-icon>
              <span class="text-h6 font-weight-medium">{{ service.title }}</span>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p style="white-space: pre-line;" class="mb-0 text-body-1 font-weight-regular">
                {{ service.content }}
              </p>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

    <v-row class="mt-12" align="center" justify="center">
      
      <v-col cols="12" md="8">
        <h2 class="mb-4 text-h4 font-weight-medium text--primary">การสั่งงาน</h2>

        <h2>ขั้นตอนการสั่งงาน </h2>
        <p>
          1. แอดไลน์ Fast Code โดยการแอดเพื่อนด้วย ID @214xxhec<br>
          2. พิมพ์รายละเอียดงาน/โปรแกรม ที่ต้องการลงไปในแชท Fast Code เพื่อตกลงข้อกำหนด ราคา และกำหนดส่งงาน
        </p>
        <h2>ตัวอย่างแชทการสั่งงาน</h2>
        <v-row>
          <v-col v-for="(example, index) in workExamples" :key="index" cols="12" sm="6" md="4" class="mb-4">
            <v-card class="pa-4" rounded>
              <h3 class="mb-2">{{ example.title }}</h3>
              <p style="white-space: pre-line;">{{ example.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>



    <!-- About Section / Portfolio Teaser -->
    <v-row class="mt-12" align="center" justify="center">
      <v-col cols="12" md="8">
        <h2 class="mb-4 text-h4 font-weight-medium text--primary">รีวิวจากลูกค้าของเรา</h2>

        <v-row>
          <v-col v-for="(review, index) in customerReviews" :key="index" cols="12" sm="6" md="4" class="mb-4">
            <v-card class="pa-4" rounded>
              <v-img :src="review.image" alt="Project Image" aspect-ratio="1.7" class="mb-4"></v-img>
              <h3 class="mb-2">{{ review.title }}</h3>
              <p>{{ review.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Contact Section -->
    <v-row class="mt-12 align-center justify-center text-center">
      <v-col cols="12" md="8">
        <h2>ช่องทางการติดต่อ</h2>
        <p>คุณสามารถติดต่อเราได้ผ่านช่องทางต่อไปนี้</p>
        <v-row class="justify-center">
          <v-col cols="auto" v-for="(contact, index) in contactLinks" :key="index">
            <v-btn icon :href="contact.href" target="_blank">
              <v-icon>{{ contact.icon }}</v-icon>
            </v-btn>
            <div>{{ contact.label }}</div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Emergency Contact -->
    <v-row class="mt-12 align-center justify-center text-center">
      <v-col cols="12" md="8">
        <h2>ติดต่อฉุกเฉิน</h2>
        <p>กรณีเร่งด่วน Gmail: fastcode.software@gmail.com</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.top-banner {
  max-height: 400px;
  /* Adjust as needed */
  object-fit: cover;
  /* Ensures the image covers the entire space without distortion */
}

h1 {
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-style: normal;
}

h2 {
  font-family: "Kanit", sans-serif;
  font-weight: 500;
  font-style: normal;
}

h3 {
  font-family: "Kanit", sans-serif;
  font-weight: 600;
  font-style: normal;
}
</style>
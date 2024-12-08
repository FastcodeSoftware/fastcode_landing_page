<script setup>
import { ref } from 'vue'
import fastcodeBanner from '../assets/fastcode_banner.jpg'
import fastcodeIcon from '../assets/fastcode_logo.png'
const services = [
  { title: 'เงื่อนไข', content: 'รายละเอียดเงื่อนไขการทำงาน การส่งมอบ และการชำระเงิน' },
  { title: 'โปรเจ็กที่เคยทำ', content: 'ผลงานที่ผ่านมาของเรา รวมถึงเว็บไซต์ แอปพลิเคชัน และระบบต่าง ๆ' },
  { title: 'เรทราคา', content: 'สอบถามเรทราคาได้ตามความซับซ้อนของโปรเจ็กต์' },
  { title: 'ติดต่อฉุกเฉิน', content: 'ติดต่อด่วนผ่านโทรศัพท์หรือ LINE ในกรณีฉุกเฉิน' },
]

const contactLinks = [
  { icon: 'mdi-twitter', label: 'X', href: 'https://twitter.com/your_account' },
  { icon: 'mdi-instagram', label: 'IG', href: 'https://instagram.com/your_account' },
  { icon: 'mdi-facebook', label: 'FB', href: 'https://facebook.com/your_page' },
  { icon: 'mdi-line', label: 'Line', href: 'https://line.me/R/ti/p/@your_line_id' },
]

const showBanner = ref(true)
</script>

<template>
  <!-- Top Banner -->
    <v-img
      :src="fastcodeBanner"
      alt="Top Banner Image"
      width="100%"
      class="top-banner"
      cover
    >
    </v-img>

   <!-- Cards Between Banner and Body -->
   <v-container fluid class="py-4" style="margin-top: -10rem">
    <v-row class="justify-center"  dense>
      <!-- Card 1: รับเขียนโค้ด -->
      <v-col cols="3" sm="3" >
        <v-card class="py-15 text-center" rounded elevation="2" >
          <v-icon size="48" class="mb-2">mdi-code-tags</v-icon>
          <h3 class="mb-2 font-weight-bold">รับเขียนโค้ด</h3>
          <p>บริการพัฒนาโค้ดตามความต้องการของคุณ</p>
        </v-card>
      </v-col>

      <!-- Card 2: รับทำโปรเจ็ค -->
      <v-col cols="3" sm="3" >
        <v-card class="py-15 text-center" rounded elevation="2">
          <v-icon size="48" class="mb-2">mdi-briefcase-check</v-icon>
          <h3 class="mb-2 font-weight-bold">รับทำโปรเจ็ค</h3>
          <p>จัดทำโปรเจ็กต์ขนาดเล็กจนถึงระบบใหญ่</p>
        </v-card>
      </v-col>

      <!-- Card 3: รับปรึกษางาน -->
      <v-col cols="3" sm="3" >
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
        <v-img :src="fastcodeIcon" width="100%"  ></v-img>
      </v-col>
      <v-col cols="12" md="7">
   
        <h2 class="subtitle-1 mb-6">รับจ้างเขียนโค้ด - โปรเจ็ค - ปรึกษางาน</h2>
        <p class="mb-8">
          เราคือ Software House ที่พร้อมให้บริการด้วยความน่าเชื่อถือและคุณภาพ
          ไม่ว่าจะเป็นงานเว็บไซต์ แอปพลิเคชัน หรือระบบซับซ้อน เราพร้อมตอบโจทย์
          ความต้องการของคุณ
        </p>
        <v-btn color="secondary" class="mx-2 px-10" style="text-align: center;"  elevation="1">ติดต่อเรา</v-btn>
        <v-btn color="primary" outlined class="mx-2 px-10" style="text-align: center;" >ดูผลงาน</v-btn>
      </v-col>
    </v-row>

    <!-- Services Section -->
    <v-row class="mt-12" align="stretch" justify="center" dense>
      <v-col cols="12" md="8">
        <h2 class="mb-4">สิ่งที่คุณสามารถพบได้ใน Fast Code</h2>
        <v-row>
          <v-col
            v-for="(service, i) in services"
            :key="i"
            cols="12"
            sm="6"
            class="mb-6"
          >
            <v-card variant="outlined" class="h-100 pa-4" rounded>
              <h3 class="mb-2">{{ service.title }}</h3>
              <p>{{ service.content }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- About Section / Portfolio Teaser -->
    <v-row class="mt-12" align="center" justify="center">
      <v-col cols="12" md="8">
        <h2>ผลงานที่เคยทำ</h2>
        <p>
          เราได้มีประสบการณ์ในการพัฒนาโปรเจ็กต์หลากหลายรูปแบบ เช่น:
          เว็บไซต์องค์กร แพลตฟอร์มอีคอมเมิร์ซ ระบบจองห้องประชุม และแอปพลิเคชันมือถือ
          ลูกค้าของเรามาจากทั้งในประเทศและต่างประเทศ
        </p>
        <v-row>
          <v-col cols="12" sm="6" md="4" class="mb-4" v-for="n in 3" :key="n">
            <v-card class="pa-4" rounded>
              <v-img
                src="https://via.placeholder.com/300x200"
                alt="Project Image"
                aspect-ratio="1.7"
                class="mb-4"
              ></v-img>
              <h3 class="mb-2">โปรเจ็กต์ตัวอย่าง {{ n }}</h3>
              <p>รายละเอียดสั้น ๆ ของโปรเจ็กต์</p>
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
        <p>กรณีเร่งด่วน โทร: 089-xxx-xxxx (ตัวอย่าง) หรือ LINE: @your_line_id</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.top-banner {
  max-height: 400px; /* Adjust as needed */
  object-fit: cover; /* Ensures the image covers the entire space without distortion */
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
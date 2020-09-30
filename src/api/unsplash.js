import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
      Authorization: 'Client-ID lkSV9Xlb8Cnqhvpsev6_HZ_VFED3DW_6yF7pOVon3uc'
  }
})

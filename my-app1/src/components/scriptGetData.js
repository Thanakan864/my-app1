import axios from "axios";
export default {
  name: "water-table",
  data() {
    return {
    };
  },
  computed: {
        
  },
  methods: {
    
  },
  mounted() {
    // console.log('water')
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbyn9rKaQXdHzu3n-ocdq2OdKJmmsxNOlNRKFhiCSDpxPbxsYfD49mvwd52k1Za92WezIw/exec?action=getUsers"
        // "https://script.google.com/macros/s/AKfycbzDm1SNtXwsmaQo2s0NFRrfWNrCX05QH-hDmRLxMnotWiohnOQk9KQQM9xfqL90lYzX/exec?action=getDatas"
      )
      .then((response) => {
        this.info = response.data;
        console.log(response.data);
        // for(let item of this.info){
        //   console.log(item.PADDY)
        // }
      });
  },
  
};
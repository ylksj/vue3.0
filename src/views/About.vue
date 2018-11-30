<template>
  <div>
    <div id="app">a={{ a }}, b={{ b }}</div>
    <div>
      <p>3333333333333333{{c}}</p>
    </div>
    <h1 v-show="ps">Hello!</h1>
    <input v-if="ps" type="text" placeholder="测试1" key="11111">
    <input v-else type="text" placeholder="测试2" key="2222">
    <button @click="click">点击</button>
    <ul>
      <li v-for="(oo,name) in todos" :key="name">{{oo.id}}==={{oo.title}}=={{name}}</li>
    </ul>
    <input type="radio" value="oo" v-model="checkbox">
    <input type="radio" value="iii" v-model="checkbox">
    <p>{{checkbox}}</p>
    <select v-model="sel">
      <option value disabled>选择</option>
      <option>1</option>
      <option>2</option>
    </select>
    <p>no:{{sel}}</p>
    <div class="content-block__effect" style="display:flex;justify-content: space-around">
        <!-- <div class="portfolio-effect"> -->
            <!-- portfolio item -->
            <div class="portfolio-item  portfolio-item--eff1">
                <img class="portfolio-item__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/694606/eff-28.jpg" alt="Portfolio Item" width="826" height="551">
                <!-- 蒙版 -->
                <div class="portfolio-item__info">
                    <h3 class="portfolio-item__header">dddddd</h3>
                    <div style="display: flex">
                        <div class="portfolio-item__link-block">
                            <a class="portfolio-item__link" href="#" title="">
                                <i class="material-icons">link</i>
                            </a>
                        </div>
                        <div class="portfolio-item__link-block">
                            <a class="portfolio-item__link" href="#" title="">
                                <i class="material-icons">cloud_download</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="portfolio-item  portfolio-item--eff2">
                <img class="portfolio-item__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/694606/eff-28.jpg" alt="Portfolio Item"
                    width="826" height="551">
                <!-- 蒙版 -->
                <div class="portfolio-item__info">
                    <h3 class="portfolio-item__header">dddddd</h3>
                    <div style="display: flex">
                        <div class="portfolio-item__link-block">
                            <a class="portfolio-item__link" href="#" title="">
                                <i class="material-icons">search</i>
                            </a>
                        </div>
                        <div class="portfolio-item__link-block">
                            <a class="portfolio-item__link" href="#" title="">
                                <i class="material-icons">cloud_download</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkbox: "",
      sel: "",
      a: "aaaa",
      c: "dddd",
      ps: true,
      object: {
        firstName: "John",
        lastName: "Doe",
        age: 30
      },
      newTodoText: "",
      todos: [
        {
          id: 1,
          title: "Do the dishes"
        },
        {
          id: 2,
          title: "Take out the trash"
        },
        {
          id: 3,
          title: "Mow the lawn"
        }
      ],
      nextTodoId: 4
    };
  },

  created() {},
  //进页面立即执行一次
  mounted() {
    const vm = this;
    //调用方法
    //vm.click()
  },
  //自定义方法
  methods: {
    click() {
      this.ps = this.ps == false ? true : false;
      // this.inte.push({ add: "33333" });
    }
  },
  //监听返回值(不管有没有变化只要有这个变量就执行)
  computed: {
    b: {
      //没有给b赋值的时候
      get: function() {
        console.log(111111);
        return this.c + 2;
      },
      //给b赋值的时候
      set: function(newValue) {
        console.log(22222);
        this.c = newValue;
      }
    }
  },
  //监听过程(被赋值的元素)有变化才执行
  watch: {
    a: function(val) {
      console.log(val);
    },
    c: function(val) {
      console.log(val);
    },
    b: function(val) {
      console.log(val);
    },
    ps: function(val) {
      console.log(val);
    }
  },
  component: {}
};
</script>
<style> 
@import'../../public/css/style.css';
@import'../../public/css/icon.css';
</style>


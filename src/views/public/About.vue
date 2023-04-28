<template>
<!--  container that conclude description of this project-->
  <b-container>

    <h1>
      项目历史
    </h1>
{{userInfo}}
      <b-row>
        <b-col cols="4" v-for="desc in descriptions">
          <b-card
            :title="desc.title"
            :img-src="desc.img"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
            no-body
          >
            <b-card-body>
              <b-card-text>
                <b-row>
                  <b-col v-for="tag in desc.tags">
                    <b-badge :variant="tag.style"> {{ tag.name }} </b-badge>
                  </b-col>
                </b-row>
              </b-card-text>
              <b-card-text>
                {{desc.description}}
              </b-card-text>
            </b-card-body>

            <b-card-footer>
              <i class="fas fa-clock "></i> {{ desc.time }} &nbsp;&nbsp;
              <i class=" fas fa-link"  ></i> <a :href="desc.link"> {{ desc.linkName }} </a>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>

  </b-container>
</template>

<script>
import Header from "@/components/public/PublicHeader.vue";
import PublicFooter from "@/components/public/PublicFooter.vue";
import {useStore} from "vuex";
import {computed, onMounted} from "vue";
export default {
  name: "about",
  components: {
    Header,
    PublicFooter
  },
  data () {
    // const store = useStore();
    const userInfo = {};
    const getUserInfo = () => {
      // this.userInfo = store.getters.userInfo;
      this.$store.comm
      this.userInfo = computed(() => this.$store.getters.userInfo);
      console.log("userInfo", this.userInfo)
    };
    onMounted(() => {
      getUserInfo();
    });
    return {
      userInfo,
      descriptions: [
        {
          title: "Python Ver1",
          img: "../../public/about/youhai.png",
          time: "2022-3",
          link: "https://github.com/GWillS163/AssignmentSubmission_Python_Edition",
          linkName: "Github",

          description: "项目通过python 制作本地客户端软件。 通过邮件服务器进行存储上传和下载。 实现了简单的上传作业的功能。",
          tags: [
            {
              name: "Python",
              style: "primary"
            },
            {
              name: "桌面端",
              style: "success"
            },
            {
              name: "邮件服务器",
              style: "warning"
            }
          ]
        },
        {
          title: "Java Ver2",
          img: "../../public/about/qita.png",
          time: "2022-6",
          link: "https://github.com/GWillS163/AssignmentSubmission_Java_Edition",
          linkName: "Github",
          tags: [
            {
              name: "Java",
              style: "primary"
            },
            {
              name: "桌面端",
              style: "success"
            },
            {
              name: "MangoDB Atlas",
              style: "warning"
            }
          ],
          description: "项目通过Java 打包为exe。且经过了设备注册功能， 通过MangoDB进行格式化存储。 进一步优化了功能。"
        },
        {
          title: "SpringBoot Ver3",
          img: "../../public/about/spring_bin.png",
          time: "2023-5",
          link: "https://github.com/GWillS163/AssignmentSubmission_Spring",
          linkName: "Github",
          tags: [
            {
              name: "SpringBoot",
              style: "primary"
            },
            {
              name: "Vue3",
              style: "success"
            },
            {
              name: "BootStrap",
              style: "secondary"
            },
            {
              name: "MySql",
              style: "warning"
            }
          ],
          description: "开发为Web应用，更多的功能管理及可视化页面，更加友好。"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
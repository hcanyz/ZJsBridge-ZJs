<template>
  <div class="hello">
    <img :src="this.selectNativeResourceUrl" width="50" height="50" />
    <div class="box" name="base">
      <div class="button" @click="config">config</div>
    </div>

    <div class="box" name="test">
      <div class="button" @click="_test_unicode_params_and_result">_test_unicode_params_and_result</div>
    </div>

    <div class="box" name="utils">
      <div class="button" @click="setTitle">setTitle</div>
      <div class="button" @click="backCloseWindow">backCloseWindow</div>
      <div class="button" @click="closeWindow">closeWindow</div>
      <div class="button" @click="putLocalStorageKV">putLocalStorageKV</div>
      <div class="button" @click="getLocalStorageKV">getLocalStorageKV</div>
    </div>

    <div class="box" name="photos">
      <div class="button" @click="choosePhotos">choosePhotos</div>
      <div class="button" @click="uploadPhotos">uploadPhotos</div>
      <div class="button" @click="previewPhotos">previewPhotos</div>
    </div>

    <div class="box" name="videos">
      <div class="button" @click="chooseVideos">chooseVideos</div>
      <div class="button" @click="uploadVideos">uploadVideos</div>
      <div class="button" @click="previewVideo">previewVideo</div>
    </div>

    <div class="box" name="files">
      <div class="button" @click="chooseFile">chooseFile</div>
      <div class="button" @click="uploadFile">uploadFile</div>
      <div class="button" @click="previewFile">previewFile</div>
    </div>

    <div class="box" name="location">
      <div class="button" @click="chooseLocation">chooseLocation</div>
      <div class="button" @click="getLocation">getLocation</div>
      <div class="button" @click="previewLocation">previewLocation</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      selectNativeResourceUrl: undefined
    };
  },
  mounted() {
    setTimeout(() => {
      window.zfApi.onContainerResume(ret => {
        console.log(`onContainerResume ${JSON.stringify(ret)}`);
      });
      window.zfApi.onContainerPause(ret => {
        console.log(`onContainerPause ${JSON.stringify(ret)}`);
      });
    }, 500);
  },
  methods: {
    config() {
      window.zfApi.config({
        success(ret) {
          console.log(`config success ${JSON.stringify(ret)}`);
        },
        fail(ret) {
          console.log(`config fail ${JSON.stringify(ret)}`);
        },
        complete(ret) {
          console.log(`config complete ${JSON.stringify(ret)}`);
          window.location.href = "https://github.com/hcanyz/";
        }
      });
    },

    _test_unicode_params_and_result() {
      window.zfTestApi._test_unicode_params_and_result({
        unicodeParams: "中文 Emoji 😂🤣",
        success({unicodeResult}) {
            console.log(unicodeResult);
        }
      });
    },

    setTitle() {
      window.zfApi.setTitle({
        title: "test 123"
      });
    },
    backCloseWindow() {
      window.zfApi.backCloseWindow({});
    },
    closeWindow() {
      window.zfApi.closeWindow({});
    },
    putLocalStorageKV() {
      let key = "test";
      let value = "123456789";
      window.zfApi.putLocalStorageKV({
        key,
        value,
        success() {
          console.log(`putLocalStorageKV success, key:${key} value:${value}`);
        }
      });
    },
    getLocalStorageKV() {
      let key = "test";
      window.zfApi.getLocalStorageKV({
        key,
        success(ret) {
          console.log(
            `getLocalStorageKV success, key:${key} value:${ret.value}`
          );
        }
      });
    },

    choosePhotos() {
      var _this = this;
      window.zfApi.choosePhotos({
        enableCount: 3, //可选择数量，0<enableCount<=9
        success(ret) {
          let result = ret.result; //[{nativeResourceUrl:"",name:"",size:0}]
          result.forEach(element => {
            let nativeResourceUrl = element.nativeResourceUrl;
            let name = element.name;
            let size = element.size;
            _this.selectNativeResourceUrl = element.nativeResourceUrl;
          });
          console.log(`choosePhotos success, ret:${JSON.stringify(result)}`);
        },
        cancel(ret) {}
      });
    },
    uploadPhotos() {
      window.zfApi.uploadPhotos({
        nativeResourceUrls: [this.selectNativeResourceUrl || "assets/logo.png"],
        success(ret) {
          let result = ret.result; //[{nativeResourceUrl:"",serverResourceUrl:""}]
          result.forEach(element => {
            let nativeResourceUrl = element.nativeResourceUrl; //图片本地地址，可以直接指定为image标签src
            let serverResourceUrl = element.serverResourceUrl; //服务器地址
          });
          console.log(`uploadPhotos success, ret:${JSON.stringify(result)}`);
        }
      });
    },
    previewPhotos() {
      window.zfApi.previewPhotos({
        urls: [this.selectNativeResourceUrl || "assets/logo.png"], //可以为nativeResourceUrl
        index: 0, //打开时展示的图片位置
        success() {}
      });
    },

    chooseVideos() {
      var _this = this;
      window.zfApi.chooseVideos({
        enableCount: 3, //可选择数量,0<enableCount<=3
        success(ret) {
          let result = ret.result; //[{nativeResourceUrl:"",name:"",size:0,videoTime:0}]
          result.forEach(element => {
            let nativeResourceUrl = element.nativeResourceUrl; //图片本地地址，可以直接指定为image标签src
            let videoTime = element.videoTime; //视频时长，毫秒
            _this.selectNativeResourceUrl = element.nativeResourceUrl;
          });
          console.log(`chooseVideos success, ret:${JSON.stringify(result)}`);
        },
        cancel(ret) {}
      });
    },
    uploadVideos() {
      window.zfApi.uploadVideos({
        nativeResourceUrls: [this.selectNativeResourceUrl || "assets/logo.png"],
        success(ret) {
          let result = ret.result; //[{nativeResourceUrl:"",serverResourceUrl:""}]
          result.forEach(element => {
            let nativeResourceUrl = element.nativeResourceUrl; //图片本地地址，可以直接指定为image标签src
            let serverResourceUrl = element.serverResourceUrl; //服务器地址
          });
        }
      });
    },
    previewVideo() {
      window.zfApi.previewVideo({
        url: this.selectNativeResourceUrl || "assets/logo.png", //可以为nativeResourceUrl
        success() {}
      });
    },

    chooseFile() {
      window.zfApi.chooseFile({
        enableCount: 3, //可选择数量，0<enableCount<=9，在多选时才处理-iOS不支持多选
        maxSize: 3, //单个文件限制大小：0，无限制；>0 限制最大值，单位为MB
        isMultiSelect: true, //（true，为多选  false，单选-iOS不支持多选）
        success(ret) {
          let result = ret.result; //[{nativeResourceUrl:"",name:"",size:0}]
          result.forEach(element => {
            let nativeResourceUrl = element.nativeResourceUrl; //图片本地地址，可以直接指定为image标签src
            let serverResourceUrl = element.serverResourceUrl; //服务器地址
          });
          console.log(`chooseFile success, ret:${JSON.stringify(result)}`);
        },
        cancel(ret) {}
      });
    },
    uploadFile() {
      window.zfApi.uploadFile({
        nativeResourceUrls: [this.selectNativeResourceUrl || "assets/logo.png"],
        success(ret) {
          let result = ret.result; //[{nativeResourceUrl:"",serverResourceUrl:""}]
          result.forEach(element => {
            let nativeResourceUrl = element.nativeResourceUrl; //图片本地地址，可以直接指定为image标签src
            let serverResourceUrl = element.serverResourceUrl; //服务器地址
          });
        }
      });
    },
    previewFile() {
      window.zfApi.previewFile({
        url: this.selectNativeResourceUrl || "assets/logo.png", //可以为nativeResourceUrl
        success() {}
      });
    },

    chooseLocation() {
      window.zfApi.chooseLocation({
        success(ret) {
          let address = ret.address; // 位置精度
          let latitude = ret.latitude; // 纬度，浮点数，范围为90 ~ -90
          let longitude = ret.longitude; // 经度，浮点数，范围为180 ~ -180。
          console.log(`chooseLocation success, ret:${JSON.stringify(ret)}`);
        }
      });
    },
    getLocation() {
      window.zfApi.getLocation({
        success(ret) {
          let address = ret.address; // 详细地址
          let latitude = ret.latitude; // 纬度，浮点数，范围为90 ~ -90
          let longitude = ret.longitude; // 经度，浮点数，范围为180 ~ -180。
          console.log(`getLocation success, ret:${JSON.stringify(ret)}`);
        }
      });
    },
    previewLocation() {
      window.zfApi.getLocation({
        success(ret) {}
      });
    }
  }
};
</script>

<style scoped>
.box::before {
  content: attr(name);
  width: 100%;
  display: block;
  font-size: 20px;
  margin-bottom: 5px;
  text-align: left;
  margin-left: 10px;
  font-weight: bold;
}

.box {
  border-top: 1px cadetblue solid;
  padding: 10px 0px;
  display: flex;
  align-items: flex-start;
  justify-items: flex-start;
  flex-wrap: wrap;
}

.button {
  display: block;
  padding: 5px;
  margin: 5px 10px;
  border: 1px cadetblue solid;
}
</style>

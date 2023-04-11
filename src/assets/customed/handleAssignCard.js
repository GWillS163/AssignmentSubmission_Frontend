
console.log("imported handleAssignCard.js")
const handleAssignCard = {
    getBarColor(ddl, isUploadEnable) {
      switch (this.getStatusType(ddl, isUploadEnable)) {
        case 0:
          return "secondary"  // 未开始
        case 1:
          return "success"  // 进行中
        case 2:
          return "warning" // 即将截止
        case 3:
          return "danger" // 手动结束
        case 4:
          return "dark"  // 自动结束
      }
    },
    getStatus(ddl, isUploadEnable) {
      switch (this.getStatusType(ddl, isUploadEnable)) {
        case 0:
          return "未开始"  // 未开始
        case 1:
          return "进行中"  // 进行中
        case 2:
          return "即将截止" // 即将截止
        case 3:
          return "手动结束" // 手动结束
        case 4:
          return "已结束"  // 自动结束
      }
    },
  getDDLProgress(startTime,endTime) {
    const now = new Date();
    const startTimeStamp = new Date(startTime);
    const endTimeStamp = new Date(endTime);
    const total = endTimeStamp - startTimeStamp;
    const remained = endTimeStamp - now;
    // strip the decimals
    const progress = (total - remained) / total * 100;
    // q: why not use Math.round()?
    return Math.round(progress);
    // return (total - remained) / total * 100;
  },


    getTimeStamp(ddl) {
      const now = new Date();
      const ddlTime = new Date(ddl);
      return ddlTime - now;
    },
    getRemainedTime(ddl) {
      const remainedTime = this.getTimeStamp(ddl);
      if (remainedTime < 0) {
        return "已结束"
      }
      if (remainedTime < 86400000) {
        const seconds = Math.floor(remainedTime / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        return hours % 24 + ":" + minutes % 60 + ":" + seconds % 60 + "";
      } else {
        return Math.floor(remainedTime / 86400000) + "天"
      }

    },
    getStatusType(ddl, isUploadEnable) {
      if ( !ddl || ddl.trim() === '') {
        return 0
      }
      const remainedTime = this.getTimeStamp(ddl);
      // console.log("remainedTime: " + remainedTime + " " + ddl + " " + this.getRemainedTime(ddl));
      if (!isUploadEnable) {
        return remainedTime > 0 ? 0 : 4 // 未开始 or 已结束
      }
      if (remainedTime < 0) { // 已结束
        return 4
      } else if (remainedTime < 8640000) {
        return 2  // 即将截止
      } else if (remainedTime < 259200) { // between 1 and 3 days
        return 5
      } else {
        return 1 // 进行中
      }

    },
    getTitle(ddl, isUploadEnable) {
      switch (this.getStatusType(ddl, isUploadEnable)) {
        case 0:
          return "未开始"
        case 1:
          return "进行中"
        case 2:
          return "即将截止"
        case 3:
          return "手动结束"
        case 4:
          return "已结束"
      }
    },


    isShowProgress(assign) {
      if (!assign.uploadEnable) {
        return false;
      } else {
        return this.getStatusType(assign.ddl, assign.uploadEnable) !== 4;
      }
    },

    isShow(assign) {
      if (this.viewMode) {
        return true;
      }
      if (!assign.uploadEnable) {
        return false;
      } else {
        return this.getStatusType(assign.ddl, assign.uploadEnable) !== 4;
      }
    },

    getCurrentTime() {
      const now = new Date();
      return now.getTime();
    },
    getCardStyles(assign) {
      let defaultStyles = ["border-color: var(--bs-grey);", 'text-bg-secondary border-secondary', "无截止期"]
      let current = this.getCurrentTime();
      if (assign.ddl) {
        return defaultStyles
      }
      let dueTime = new Date(assign.ddl).getTime();
      let lastTime = dueTime - current;
      // console.log("current: " + current + "ms" + ",namely: " + new Date(current).toLocaleString())
      // console.log("dueTime: " + dueTime + "ms" + ",namely: " + new Date(dueTime).toLocaleString())
      // turn lastTime to days, and then to hours, minutes, show them in console
      // console.log("lastTime: " + lastTime, "remained:" + lastTime / 86400000 + "days")
      if (lastTime < 0) {
        // console.log("overdue")
        return ["danger", "text-bg-danger border-danger", "已过期"]
      } else if (lastTime < 86400000 * 3) {
        // console.log("less than 1 day")
        return ["warning", "text-bg-warning border-warning", "即将过期"]
      } else if (lastTime > 86400000 * 3) {
        // console.log("less than 3 days")
        return ["success", "text-bg-success border-success", "正在进行"]
      } else {
        // console.log("more than 3 days")
        return defaultStyles
      }
    },

    addStyle (assign){ // 为了触发更新
      // if (typeof assign === "undefined" || typeof assign === "string" && assign.length === 1) {
      //   return "secondary"
      // }
      // console.log("addStyle", assign)
      // assign.style = this.getBarColor(assign.ddl, assign.uploadEnable)
      assign.style = this.getBarColor(assign.ddl, assign.uploadEnable)
      assign.status = this.getStatus(assign.ddl, assign.uploadEnable)
      // console.log("added style", assign)
      return assign
      //   showProgress: this.isShowProgress(assign),
      //   show: this.isShow(assign)
    },


    formatFileSize(value) {

          if (value < 1024) {
            return value + 'B';
          } else if (value < 1024 * 1024) {
            return (value / 1024).toFixed(2) + 'KB';
          } else if (value < 1024 * 1024 * 1024) {
            return (value / 1024 / 1024).toFixed(2) + 'MB';
          } else {
            return (value / 1024 / 1024 / 1024).toFixed(2) + 'GB';
          }
    }
}

export { handleAssignCard as default}
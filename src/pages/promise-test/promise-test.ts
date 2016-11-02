import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PromiseTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-promise-test',
  templateUrl: 'promise-test.html'
})
export class PromiseTest {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
      console.dir(Promise);
      this.testPuzzle();
  }

  testPuzzle() {
      let p1 = this.puzzlePromise('p1');
      p1.then(result => {
          console.log(result);
      })
          .then(result => {
              console.log('final1');
              console.log(result);
          });

      let p2 = this.puzzlePromise('p2');
      p2.then(result => {
          this.puzzleTestFun();
      })
          .then(result => {
              console.log('final2');
              console.log(result);
          });

      let p3 = this.puzzlePromise('p3');
      p3.then(result => {

      });//如果非函数，typescript是会报错的。如果传入一个fun()，这是一个执行。但在ts也会报错
  }

  puzzleTestFun() {
      console.log('puzzle test fun');
  }

  puzzlePromise(str: string) {
      let p = new Promise((resolve,reject) => {
          setTimeout(() => {
              resolve(str);
          },2000);
      });
      return p;
  }

    //Promise.race
  testRace() {
      Promise.race([this.getImage(),this.imageTimeOut()])
          .then(results => {
              console.log(results);
          })
          .catch(reason => {
              console.log('test race error');
              console.log(reason);
          })
  }

  getImage() {
      let p = new Promise((resolve,reject) => {
          let img = new Image();
          img.onload = function() {
              resolve(img);
          }
          img.src = 'xxx';
      });
      return p
  }

  imageTimeOut() {
      let p = new Promise((resolve,reject) => {
          setTimeout(() => {
              reject('图片加载失败');
          },5000);
      });
      return p;
  }

    //Promise.all
  testAll() {
      Promise.all([this.runAsyn1(),this.runAsyn2(),this.runAsyn3()])
          .then(results => {
              console.log(results);
          })
          .catch(reason => {
              console.log(reason);
          })
  }

    //promise.reject
  testReject() {
      this.getNumber()
          .then(
              data => {
                  console.log('resolve');
                  console.log(data);
                  throw new Error('from then');
              },
              reason => {
                  console.log('reject');
                  console.log(reason);
              }
          )
          .catch(reason => {
              console.log('catch');
              console.log(reason);
          })
  }

  getNumber() {
      let p = new Promise(function(resolve,reject){
          setTimeout(() => {
              let num = Math.ceil(Math.random() * 10);
              if(num <= 5){
                  resolve(num);
              }
              else {
                  reject('数字大于5了，哥');
              }
          },2000);
      });
      return p;
  }

    //Promise.resolve
    //promise.then
    //promise.catch
  testAsyn() {
      this.runAsyn1()
          .then(data => {
              console.log(data);
              return this.runAsyn2()
          })
          .then(data => {
              console.log(data);
              return '执行完2，直接返回数据';
              // return this.runAsyn3()
          })
          .then(data => {
              console.log(data);
          })
          .catch(error => console.log('error'));
  }

  runAsyn1() {
      let p = new Promise(function(resolve,reject){
          setTimeout(function(){
              console.log('执行完成1');
              resolve('随便什么数据1');
          },2000);
      });
      return p;
  }

  runAsyn2() {
      let p = new Promise(function(resolve,reject){
          setTimeout(function(){
              console.log('执行完成2');
              resolve('随便什么数据2');
          },2000);
      });
      return p;
  }

  runAsyn3() {
      let p = new Promise(function(resolve,reject){
          setTimeout(function(){
              console.log('执行完成3');
              resolve('随便什么数据3');
          },2000);
      });
      return p;
  }

}

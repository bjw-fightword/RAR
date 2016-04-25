$(function(){
	/*移动下拉菜单*/
	$("#menu").click(function(){
		if($("#menu-list").css("display")=='none'){
			$("#menu-list").slideDown();
		}else{
			$("#menu-list").slideUp();
		}
	});
	/*$('#menu-list li').click(function(){
		$('#menu-list').css({display:'none'})
	})*/
	/*楼层跳转*/
	/*var M = $('#header-right-list li').not($('#header-right-list li').filter(function(){
		return $(this).hasClass('index');
	}));
	$(M).each(function(i){
		$(this).click(function(){
			var N = $('.floors').eq(i).offset().top;
			$('body').animate({scrollTop:N})
			$(document.documentElement).animate({scrollTop:N})
		})
	})
	var A = $('#menu-list li').not($('#menu-list li').filter(function(){
		return $(this).hasClass('index');
	}));
	$(A).each(function(i){
		$(this).click(function(){
			var N = $('.floors').eq(i).offset().top;
			$('body').animate({scrollTop:N})
			$(document.documentElement).animate({scrollTop:N})
		})
	})*/
	/*返回顶部*/
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$(".return-top").fadeIn();
		}else{
			$(".return-top").fadeOut();
		}
	})
	$(".return-top").click(function(){
		$('body').animate({scrollTop:0});	
		$(document.documentElement).animate({scrollTop:0})
	})
	/*社交注册*/
	/*left*/
	$(".bottom-fixed-left").click(function(){
		if($(".bottom-fixed-left ul").css('display')=='none'){
			$(".bottom-fixed-left ul").fadeIn();
			//$(".bottom-fixed-left").css('background-image','url(../images/add3.png)')
		}else{
			$(".bottom-fixed-left ul").fadeOut();
			//$(".bottom-fixed-left").css('background-image','url(../images/add.png)')
		}
	})
	/*right*/
	$(".bottom-fixed-right").click(function(event){
		$(".bottom-fixed").fadeOut();
		window.location.href = 'sign-up.html';
	})

	/*跳转到单页*/
	$(".GVRC2016-MEDIA").click(function(event){
		window.location.href = 'register-media.html';
		event.stopPropagation();
	})
	$(".GVRC2016").click(function(event){
		window.location.href = 'register.html';
		event.stopPropagation();
	})
	$(".GVRC2016-SPONSOR").click(function(event){
		window.location.href = 'register-sponsor.html';
		event.stopPropagation();
	})
	$(".GVRC2016-EXHIBITOR").click(function(event){
		window.location.href = 'register-exhibitor.html';
		event.stopPropagation();
	})
	$(".ROADSHOW-PASS").click(function(event){
		window.location.href = 'register-roadshow.html';
		event.stopPropagation();
	})
	$(".times").click(function(event){
		window.location.href = 'agenda.html';
		event.stopPropagation();
	})
	$(".exhibition").click(function(event){
		window.location.href = 'exhibition.html';
	})
	$(".meeting").click(function(event){
		window.location.href = 'meeting.html';
	})
	$(".mybtn").click(function(event){
		window.location.href = 'sign-up.html';
	})
	$(".zhuye").click(function(event){
		window.location.href = 'index.html';
	})
	$(".header-left").click(function(event){
		window.location.href = 'index.html';
	})
	$(".web-sign-up").click(function(event){
		window.location.href = 'sign-up.html';
	})
	/*报名方式*/
	$(".Ticket").hover(function(){
		$(".register-list").stop();
		$(this).find(".register-list").slideDown();
		$(this).find("#Participants-list").slideUp();
	},function(){
		$(".register-list").stop();
		$(this).find(".register-list").slideUp();
	})
	/*参会报名下拉*/
	$(".GVRC2016ul").hover(function(){
		$(this).find("#Participants-list").slideDown();
	},function(){
		$(this).find("#Participants-list").slideDown();
	})
})
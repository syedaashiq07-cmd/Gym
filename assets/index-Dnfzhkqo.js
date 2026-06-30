(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const L={HIIT:{id:"hiit",name:"HIIT (High Intensity Interval Training)",description:"Ignite your metabolism with high-intensity intervals that burn fat and build cardiovascular endurance long after the workout ends.",tag:"High Energy",duration:"45 Minutes",burn:"600 Calories",level:"Advanced",trainerId:"kabir",image:"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"},Strength:{id:"strength",name:"Strength & Conditioning",description:"Focus on hypertrophy, progressive overload, and form. Build lean muscle mass and structural strength under elite guidance.",tag:"Power & Form",duration:"60 Minutes",burn:"450 Calories",level:"Intermediate",trainerId:"rahul",image:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"},Dance:{id:"dance",name:"Dance Fitness",description:"An energetic dance party combining cardio, conditioning, and Indian beat choreography. The funnest way to get fit.",tag:"Cardio Party",duration:"50 Minutes",burn:"500 Calories",level:"Beginner",trainerId:"ananya",image:"https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"},Yoga:{id:"yoga",name:"Yoga Flow & Mind",description:"Restore balance, build core stability, and improve flexibility. Align breath with movement in a cinematic, calming atmosphere.",tag:"Mind & Body",duration:"60 Minutes",burn:"220 Calories",level:"Beginner",trainerId:"priya",image:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"},Boxing:{id:"boxing",name:"Boxing & Combat",description:"Learn authentic punching mechanics, footwork, and combinations. A full-body burn that builds lightning-fast reflexes and core strength.",tag:"Combat Cardio",duration:"45 Minutes",burn:"650 Calories",level:"Intermediate",trainerId:"kabir",image:"https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop"}},B={rahul:{id:"rahul",name:"Rahul Sharma",specialization:"Strength & Conditioning Coach",experience:"10 Years Experience",bio:"Former national-level powerlifter dedicated to helping everyday athletes unlock elite structural strength. Rahul focuses on progressive overload, mechanical integrity, and injury prevention.",achievements:["Coached 500+ athletes to lifting PRs","Gold medalist - State Powerlifting (2018)","ACSM Certified Personal Trainer"],image:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop"},priya:{id:"priya",name:"Priya Patel",specialization:"Yoga Alliance RYT 500",experience:"8 Years Experience",bio:"Priya blends traditional Hatha techniques with dynamic Vinyasa flows. Her classes focus on breath synchronization, mobility, mindfulness, and active core stability.",achievements:["RYT 500 Hours Yoga Alliance Certified","International Yoga Presenter (Rishikesh)","Specialist in pre/post-natal recovery"],image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"},kabir:{id:"kabir",name:"Kabir Singh",specialization:"HIIT & Boxing Specialist",experience:"7 Years Experience",bio:"An explosive, high-energy boxing coach who brings combat discipline to high-intensity circuit training. Kabir will push your mental and physical boundaries in every class.",achievements:["Pro-Am State Welterweight Champion","Certified Functional Strength Specialist","Kettlebell Athletics Level 2 Trainer"],image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"},ananya:{id:"ananya",name:"Ananya Sen",specialization:"Dance Fitness Choreographer",experience:"6 Years Experience",bio:"Ananya infuses Bollywood, Hip Hop, and Latin rhythms into intense cardiovascular workouts. She believes fitness should be the most joyful and empowering part of your day.",achievements:["Zumba Certified & Reebok Group Fitness Coach","Fit India Campaign Ambassador","Choreographed national fitness events"],image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"}},z=[{id:"mon-1",day:"Monday",name:"Pulse Strength Lift",trainer:"Rahul Sharma",time:"07:00 AM",location:"Pulse Studio, Indiranagar",totalSpots:18,bookedSpots:12,category:"Strength"},{id:"mon-2",day:"Monday",name:"HIIT Shred",trainer:"Kabir Singh",time:"08:30 AM",location:"Pulse Center, Bandra",totalSpots:20,bookedSpots:19,category:"HIIT"},{id:"mon-3",day:"Monday",name:"Dance Cardio Beat",trainer:"Ananya Sen",time:"06:00 PM",location:"Pulse Center, South Delhi",totalSpots:25,bookedSpots:15,category:"Dance"},{id:"mon-4",day:"Monday",name:"Vinyasa Flow Yoga",trainer:"Priya Patel",time:"07:30 PM",location:"Pulse Studio, Indiranagar",totalSpots:15,bookedSpots:5,category:"Yoga"},{id:"tue-1",day:"Tuesday",name:"Boxing Conditioning",trainer:"Kabir Singh",time:"07:00 AM",location:"Pulse Center, Bandra",totalSpots:16,bookedSpots:8,category:"Boxing"},{id:"tue-2",day:"Tuesday",name:"Hypertrophy Chest & Back",trainer:"Rahul Sharma",time:"06:30 PM",location:"Pulse Studio, Indiranagar",totalSpots:18,bookedSpots:14,category:"Strength"},{id:"tue-3",day:"Tuesday",name:"Slow Flow Yoga",trainer:"Priya Patel",time:"08:00 PM",location:"Pulse Center, South Delhi",totalSpots:15,bookedSpots:9,category:"Yoga"},{id:"wed-1",day:"Wednesday",name:"Pulse Strength Lift",trainer:"Rahul Sharma",time:"07:00 AM",location:"Pulse Studio, Indiranagar",totalSpots:18,bookedSpots:15,category:"Strength"},{id:"wed-2",day:"Wednesday",name:"HIIT Tabata",trainer:"Kabir Singh",time:"08:30 AM",location:"Pulse Center, Bandra",totalSpots:20,bookedSpots:11,category:"HIIT"},{id:"wed-3",day:"Wednesday",name:"Dance Cardio Beat",trainer:"Ananya Sen",time:"06:00 PM",location:"Pulse Center, South Delhi",totalSpots:25,bookedSpots:22,category:"Dance"},{id:"thu-1",day:"Thursday",name:"Boxing Conditioning",trainer:"Kabir Singh",time:"07:00 AM",location:"Pulse Center, Bandra",totalSpots:16,bookedSpots:15,category:"Boxing"},{id:"thu-2",day:"Thursday",name:"Hypertrophy Legs & Shoulders",trainer:"Rahul Sharma",time:"06:30 PM",location:"Pulse Studio, Indiranagar",totalSpots:18,bookedSpots:17,category:"Strength"},{id:"thu-3",day:"Thursday",name:"Vinyasa Flow Yoga",trainer:"Priya Patel",time:"08:00 PM",location:"Pulse Center, South Delhi",totalSpots:15,bookedSpots:12,category:"Yoga"},{id:"fri-1",day:"Friday",name:"Pulse Strength Lift",trainer:"Rahul Sharma",time:"07:00 AM",location:"Pulse Studio, Indiranagar",totalSpots:18,bookedSpots:18,category:"Strength"},{id:"fri-2",day:"Friday",name:"HIIT Shred",trainer:"Kabir Singh",time:"08:30 AM",location:"Pulse Center, Bandra",totalSpots:20,bookedSpots:10,category:"HIIT"},{id:"fri-3",day:"Friday",name:"Dance Cardio Beat",trainer:"Ananya Sen",time:"06:00 PM",location:"Pulse Center, South Delhi",totalSpots:25,bookedSpots:18,category:"Dance"},{id:"fri-4",day:"Friday",name:"Yoga Restorative",trainer:"Priya Patel",time:"07:30 PM",location:"Pulse Studio, Indiranagar",totalSpots:15,bookedSpots:4,category:"Yoga"},{id:"sat-1",day:"Saturday",name:"Super Weekend HIIT",trainer:"Kabir Singh",time:"09:00 AM",location:"Pulse Center, Bandra",totalSpots:22,bookedSpots:21,category:"HIIT"},{id:"sat-2",day:"Saturday",name:"Weekend Power Lift",trainer:"Rahul Sharma",time:"10:30 AM",location:"Pulse Studio, Indiranagar",totalSpots:18,bookedSpots:16,category:"Strength"},{id:"sat-3",day:"Saturday",name:"Bollywood Dance Party",trainer:"Ananya Sen",time:"05:00 PM",location:"Pulse Center, South Delhi",totalSpots:30,bookedSpots:28,category:"Dance"},{id:"sun-1",day:"Sunday",name:"Yin Yoga & Mediation",trainer:"Priya Patel",time:"09:30 AM",location:"Pulse Studio, Indiranagar",totalSpots:20,bookedSpots:10,category:"Yoga"},{id:"sun-2",day:"Sunday",name:"Sunday Boxing Ring",trainer:"Kabir Singh",time:"11:00 AM",location:"Pulse Center, Bandra",totalSpots:16,bookedSpots:15,category:"Boxing"}],$={"Full Body":{name:"Full Body Fat Burner",rounds:4,work:30,rest:15,exercises:["Jumping Jacks","Burpees","Squat Jumps","Push-ups","Mountain Climbers","High Knees"]},Core:{name:"Core Crusher",rounds:3,work:40,rest:15,exercises:["Plank Hold","Bicycle Crunches","Russian Twists","Flutter Kicks","Mountain Climbers","Leg Raises"]},Legs:{name:"Leg Day Blitz",rounds:4,work:35,rest:20,exercises:["Bodyweight Squats","Forward Lunges","Glute Bridges","Jump Squats","Calf Raises","Wall Sit"]},Arms:{name:"Upper Body Pump",rounds:3,work:30,rest:15,exercises:["Push-ups","Pike Push-ups","Tricep Dips","Shadow Boxing","Plank Shoulder Taps","Diamond Push-ups"]}},G=[{id:"basic",name:"Basic Access",price:"1,999",period:"/ month",features:[{text:"Unlimited General Gym Access",included:!0},{text:"Access to 1 Selected Center",included:!0},{text:"Digital QR Access Pass",included:!0},{text:"Locker & Shower Access",included:!0},{text:"All Group Classes",included:!1},{text:"Personal Trainer Support",included:!1},{text:"Customized Nutrition Plan",included:!1}]},{id:"pro",name:"Pro Club",price:"3,499",period:"/ month",features:[{text:"Unlimited General Gym Access",included:!0},{text:"Multi-Center Access (All Cities)",included:!0},{text:"Unlimited Group Classes Booking",included:!0},{text:"Digital QR Access Pass",included:!0},{text:"Locker & Shower Access",included:!0},{text:"2 Private Trainer Sessions / month",included:!0},{text:"Customized Nutrition Plan",included:!1}]},{id:"elite",name:"Elite Performance",price:"5,999",period:"/ month",isElite:!0,features:[{text:"Unlimited General Gym Access",included:!0},{text:"Multi-Center Access (All Cities)",included:!0},{text:"Unlimited Group Classes Booking",included:!0},{text:"Digital QR Access Pass",included:!0},{text:"Private Locker & Laundry Service",included:!0},{text:"Unlimited Private Trainer Sessions",included:!0},{text:"Customized Nutrition & Macro Plan",included:!0}]}];class W{constructor(){this.ctx=null}init(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&this.ctx.resume()}playBeep(e=600,a=.15,i="sine"){try{this.init();const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type=i,s.frequency.setValueAtTime(e,this.ctx.currentTime),r.gain.setValueAtTime(.001,this.ctx.currentTime),r.gain.linearRampToValueAtTime(.25,this.ctx.currentTime+.02),r.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+a),s.connect(r),r.connect(this.ctx.destination),s.start(),s.stop(this.ctx.currentTime+a)}catch(s){console.warn("Audio Context blocked or not supported:",s)}}playShortLow(){this.playBeep(440,.15,"triangle")}playHighStart(){this.playBeep(880,.3,"sine")}playSuccessChime(){this.ctx&&this.ctx.currentTime;try{this.init(),[523.25,659.25,783.99,1046.5].forEach((a,i)=>{setTimeout(()=>{this.playBeep(a,.3,"sine")},i*150)})}catch(e){console.warn("Chime failed",e)}}}const I=new W;function Y(t){const e={};(!t.name||t.name.trim().length<3)&&(e.name="Name must be at least 3 characters");const a=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;(!t.email||!a.test(t.email))&&(e.email="Please enter a valid email address");const i=/^[6-9]\d{9}$/;return(!t.phone||!i.test(t.phone))&&(e.phone="Please enter a valid 10-digit mobile number"),t.center||(e.center="Please select a preferred fitness center"),{isValid:Object.keys(e).length===0,errors:e}}function U(){return`PF-${Math.floor(1e5+Math.random()*9e5)}`}function A(t=1){const e=new Date;return e.setMonth(e.getMonth()+t),e.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}class j{constructor(){this.listeners=[],this.resetToDefaults()}resetToDefaults(){this.state={user:{isLoggedIn:!0,name:"Arjun Mehta",email:"arjun.mehta@pulseforge.in",phone:"9876543210",center:"Pulse Studio, Indiranagar",fitnessGoal:"Muscle Gain",membershipCode:"PF-849204",membershipType:"Pro Club",expiryDate:A(1),xp:1450,streak:5,caloriesBurned:420,activeMinutes:35,targetCalories:600,targetMinutes:45,targetWorkouts:4,completedWorkouts:2},bookings:["mon-1","wed-3"],classes:JSON.parse(JSON.stringify(z)),bmiResults:{bmi:23.1,status:"Normal",bmr:1780,dailyCalories:2680,macros:{protein:168,carbs:335,fat:74}},workoutHistory:[{date:"28 Jun",name:"Pulse Strength Lift",duration:"60 mins",calories:450},{date:"26 Jun",name:"HIIT Shred",duration:"45 mins",calories:600}]},this.state.bookings.forEach(e=>{const a=this.state.classes.find(i=>i.id===e);a&&(a.bookedSpots=Math.min(a.totalSpots,a.bookedSpots+1))})}getState(){return this.state}subscribe(e){return this.listeners.push(e),e(this.state),()=>{this.listeners=this.listeners.filter(a=>a!==e)}}notify(){this.listeners.forEach(e=>e(this.state))}bookClass(e){if(this.state.bookings.includes(e))return{success:!1,message:"You are already booked for this class"};const a=this.state.classes.find(i=>i.id===e);return a?a.bookedSpots>=a.totalSpots?{success:!1,message:"This class is fully booked!"}:(a.bookedSpots++,this.state.bookings.push(e),this.state.user.xp+=100,this.notify(),{success:!0,message:`Successfully booked ${a.name}!`}):{success:!1,message:"Class not found"}}cancelBooking(e){if(!this.state.bookings.includes(e))return{success:!1,message:"Booking not found"};const a=this.state.classes.find(i=>i.id===e);return a&&(a.bookedSpots=Math.max(0,a.bookedSpots-1)),this.state.bookings=this.state.bookings.filter(i=>i!==e),this.state.user.xp=Math.max(0,this.state.user.xp-50),this.notify(),{success:!0,message:"Booking cancelled successfully"}}calculateBMI(e,a,i,s,r,u){const l=i/100,n=parseFloat((s/(l*l)).toFixed(1));let o="Normal";n<18.5?o="Underweight":n>=25&&n<29.9?o="Overweight":n>=30&&(o="Obese");let p=0;a==="male"?p=10*s+6.25*i-5*e+5:p=10*s+6.25*i-5*e-161,p=Math.round(p);let c=Math.round(p*({sedentary:1.2,light:1.375,moderate:1.55,active:1.725,extreme:1.9}[r]||1.2));u==="loss"?c-=500:u==="gain"&&(c+=400);let b=.3,g=.45,h=.25;u==="loss"?(b=.35,g=.35,h=.3):u==="gain"&&(b=.25,g=.55,h=.2);const f=Math.round(c*b/4),w=Math.round(c*g/4),C=Math.round(c*h/9);return this.state.bmiResults={bmi:n,status:o,bmr:p,dailyCalories:c,macros:{protein:f,carbs:w,fat:C}},this.notify(),this.state.bmiResults}completeHIITWorkout(e,a,i){const s=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short"});this.state.workoutHistory.unshift({date:s,name:e,duration:`${a} mins`,calories:i}),this.state.user.caloriesBurned+=i,this.state.user.activeMinutes+=a,this.state.user.xp+=250,this.state.user.completedWorkouts++,this.state.user.streak++,this.notify()}purchaseMembership(e){const a={basic:"Basic Access",pro:"Pro Club",elite:"Elite Performance"};return a[e]?(this.state.user.membershipType=a[e],this.state.user.expiryDate=A(1),this.state.user.xp+=300,this.notify(),{success:!0,message:`Upgraded to ${a[e]}!`}):{success:!1,message:"Invalid membership tier"}}registerTrial(e){return this.state.user={isLoggedIn:!0,name:e.name,email:e.email,phone:e.phone,center:e.center,fitnessGoal:e.fitnessGoal,membershipCode:U(),membershipType:"Free Trial Pass",expiryDate:A(.25),xp:200,streak:1,caloriesBurned:0,activeMinutes:0,targetCalories:500,targetMinutes:30,targetWorkouts:3,completedWorkouts:0},this.state.bookings=[],this.state.workoutHistory=[],this.state.bmiResults=null,this.notify(),this.state.user}logout(){this.state.user={isLoggedIn:!1,name:"",email:"",phone:"",center:"",fitnessGoal:"",membershipCode:"",membershipType:"None",expiryDate:"",xp:0,streak:0,caloriesBurned:0,activeMinutes:0,targetCalories:500,targetMinutes:30,targetWorkouts:3,completedWorkouts:0},this.state.bookings=[],this.state.workoutHistory=[],this.state.bmiResults=null,this.notify()}}const y=new j;function R(t="home"){const e=document.getElementById("navbar-root");if(!e)return;const{user:a}=y.getState();let i="";a.isLoggedIn?i=`
            <span class="profile-tier ${a.membershipType.toLowerCase().replace(" ","-")}" style="font-size:12px; margin-right:8px; font-weight:700;">
                ${a.membershipType}
            </span>
            <button class="btn btn-glass action-logout-btn" style="padding: 8px 16px; font-size:12px;">LOGOUT</button>
        `:i=`
            <a href="#trial" class="btn btn-primary" style="padding: 10px 20px; font-size:12px;">START FREE TRIAL</a>
        `,e.innerHTML=`
        <header class="navbar-container">
            <div class="navbar-inner">
                <div class="brand-logo" id="nav-logo">
                    PULSEFORGE<span>.</span>
                </div>
                
                <nav>
                    <ul class="nav-menu" id="nav-menu-list">
                        <li><a class="nav-link ${t==="home"?"active":""}" data-view="home">Home</a></li>
                        <li><a class="nav-link ${t==="classes"?"active":""}" data-view="classes">Classes</a></li>
                        <li><a class="nav-link ${t==="bmi"?"active":""}" data-view="bmi">BMI Planner</a></li>
                        <li><a class="nav-link ${t==="hiit"?"active":""}" data-view="hiit">HIIT Timer</a></li>
                        <li><a class="nav-link ${t==="dashboard"?"active":""}" data-view="dashboard">Dashboard</a></li>
                        <li><a class="nav-link ${t==="trainers"?"active":""}" data-view="trainers">Trainers</a></li>
                        <li><a class="nav-link ${t==="membership"?"active":""}" data-view="membership">Membership</a></li>
                        <li class="mobile-only-action">
                            ${i}
                        </li>
                    </ul>
                </nav>

                <div class="nav-actions">
                    ${i}
                </div>

                <button class="hamburger" id="nav-hamburger" aria-label="Toggle Navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    `;const s=e.querySelector(".navbar-container"),r=()=>{window.scrollY>50?s.classList.add("scrolled"):s.classList.remove("scrolled")};window.addEventListener("scroll",r),r(),e.querySelectorAll(".nav-link, #nav-logo, .action-logout-btn").forEach(o=>{o.addEventListener("click",p=>{p.preventDefault();const d=document.getElementById("nav-menu-list"),m=document.getElementById("nav-hamburger");if(d&&d.classList.contains("open")&&(d.classList.remove("open"),m.classList.remove("open")),o.classList.contains("action-logout-btn")){y.logout(),window.location.hash="home";return}if(o.id==="nav-logo"){window.location.hash="home";return}const c=o.getAttribute("data-view");c&&(window.location.hash=c)})});const l=e.querySelector("#nav-hamburger"),n=e.querySelector("#nav-menu-list");l&&n&&l.addEventListener("click",()=>{l.classList.toggle("open"),n.classList.toggle("open")})}function K(){const t=document.getElementById("footer-root");if(!t)return;t.innerHTML=`
        <footer class="footer-section">
            <div class="container footer-inner">
                <div>
                    <div class="footer-logo">PULSEFORGE<span>.</span></div>
                    <p style="margin-top: 8px; font-size: 14px; max-width: 320px;">
                        Forging the future of elite physical performance and fitness technology. Discover your limits, and crush them.
                    </p>
                </div>
                
                <ul class="footer-nav">
                    <li><a class="footer-nav-link" href="#home">Home</a></li>
                    <li><a class="footer-nav-link" href="#classes">Classes</a></li>
                    <li><a class="footer-nav-link" href="#bmi">BMI Planner</a></li>
                    <li><a class="footer-nav-link" href="#hiit">HIIT Timer</a></li>
                    <li><a class="footer-nav-link" href="#dashboard">Dashboard</a></li>
                    <li><a class="footer-nav-link" href="#trainers">Trainers</a></li>
                </ul>

                <div class="footer-copy">
                    &copy; ${new Date().getFullYear()} PULSEFORGE FITNESS. Inspired by modern athletic culture. All rights reserved.
                </div>
            </div>
        </footer>
    `,t.querySelectorAll(".footer-nav-link").forEach(a=>{a.addEventListener("click",i=>{i.preventDefault();const s=a.getAttribute("href").substring(1);window.location.hash=s,window.scrollTo({top:0,behavior:"smooth"})})})}function J(){const t=document.getElementById("app-root");if(!t)return;let e="HIIT";const a=()=>{const s=L[e],r=B[s.trainerId]||{name:"Elite Coach",specialization:"Specialist",image:""},{user:u}=y.getState(),l=u.isLoggedIn?"#dashboard":"#trial",n=u.isLoggedIn?"GO TO DASHBOARD":"START FREE TRIAL";return`
            <div class="page-view active">
                <!-- HERO SECTION -->
                <section class="hero-section" style="background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop');">
                    <div class="hero-overlay"></div>
                    <div class="container" style="position: relative; z-index: 2; height: 100%; display: flex; align-items: center;">
                        <div class="hero-content">
                            <span class="hero-subtitle">PULSEFORGE FITNESS INDIA</span>
                            <h1 class="hero-title text-gradient">Unleash Your<br>Inner Power</h1>
                            <p class="hero-description">
                                Train smarter. Move stronger. Become your strongest version. Experience India's elite futuristic fitness ecosystem.
                            </p>
                            <div class="hero-actions">
                                <a href="${l}" class="btn btn-primary glow-border">${n}</a>
                                <a href="#classes" class="btn btn-secondary">EXPLORE CLASSES</a>
                            </div>
                            
                            <!-- Animated Stats -->
                            <div class="hero-stats">
                                <div class="stat-item">
                                    <h3 class="text-gradient">50+</h3>
                                    <p>Premium Trainers</p>
                                </div>
                                <div class="stat-item">
                                    <h3 class="text-gradient">25K+</h3>
                                    <p>Active Members</p>
                                </div>
                                <div class="stat-item">
                                    <h3 class="text-gradient">120+</h3>
                                    <p>Weekly Classes</p>
                                </div>
                                <div class="stat-item">
                                    <h3 class="text-gradient">15+</h3>
                                    <p>Fitness Centers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- WORKOUT EXPERIENCE EXPLORER -->
                <section class="explorer-section section-padding">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="text-gradient">Experience Explorer</h2>
                            <p>Explore our premium specialized training systems. Click a category to preview duration, energy expenditure, and coaching profiles.</p>
                        </div>

                        <!-- Tab Selectors -->
                        <div class="explorer-tabs">
                            ${Object.keys(L).map(o=>`
                                <button class="tab-btn ${e===o?"active":""}" data-cat="${o}">
                                    ${o}
                                </button>
                            `).join("")}
                        </div>

                        <!-- Interactive Explorer Card -->
                        <div class="explorer-card glass-panel" id="explorer-card-content">
                            <div class="explorer-media">
                                <img src="${s.image}" alt="${s.name}" class="explorer-img" id="exp-img">
                            </div>
                            <div class="explorer-details">
                                <span class="explorer-tag" id="exp-tag">${s.tag}</span>
                                <h3 class="explorer-name" id="exp-name">${s.name}</h3>
                                <p class="explorer-desc" id="exp-desc">${s.description}</p>
                                
                                <div class="explorer-metrics">
                                    <div class="metric-box">
                                        <span class="metric-val" id="exp-dur">${s.duration}</span>
                                        <span class="metric-lbl">Duration</span>
                                    </div>
                                    <div class="metric-box">
                                        <span class="metric-val" id="exp-burn">${s.burn}</span>
                                        <span class="metric-lbl">Est. Burn</span>
                                    </div>
                                    <div class="metric-box">
                                        <span class="metric-val" id="exp-level">${s.level}</span>
                                        <span class="metric-lbl">Intensity</span>
                                    </div>
                                </div>

                                <div class="explorer-trainer">
                                    <img src="${r.image}" alt="${r.name}" class="trainer-avatar" id="exp-trainer-avatar">
                                    <div class="trainer-info">
                                        <h4 id="exp-trainer-name">${r.name}</h4>
                                        <p id="exp-trainer-spec">${r.specialization}</p>
                                    </div>
                                </div>
                                
                                <div style="margin-top: 30px;">
                                    <a href="#classes" class="btn btn-primary" style="width:100%;">Book Class Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `};t.innerHTML=a();const i=t.querySelector(".explorer-tabs");i&&i.addEventListener("click",s=>{const r=s.target.closest(".tab-btn");if(!r)return;const u=r.getAttribute("data-cat");if(u&&u!==e){e=u,i.querySelectorAll(".tab-btn").forEach(n=>n.classList.remove("active")),r.classList.add("active");const l=document.getElementById("explorer-card-content");l&&(l.style.opacity="0.3",l.style.transform="translateY(5px)",l.style.transition="opacity 0.2s, transform 0.2s",setTimeout(()=>{const n=L[e],o=B[n.trainerId]||{name:"Elite Coach",specialization:"Specialist",image:""};document.getElementById("exp-img").src=n.image,document.getElementById("exp-img").alt=n.name,document.getElementById("exp-tag").innerText=n.tag,document.getElementById("exp-name").innerText=n.name,document.getElementById("exp-desc").innerText=n.description,document.getElementById("exp-dur").innerText=n.duration,document.getElementById("exp-burn").innerText=n.burn,document.getElementById("exp-level").innerText=n.level,document.getElementById("exp-trainer-avatar").src=o.image,document.getElementById("exp-trainer-avatar").alt=o.name,document.getElementById("exp-trainer-name").innerText=o.name,document.getElementById("exp-trainer-spec").innerText=o.specialization,l.style.opacity="1",l.style.transform="translateY(0)"},200))}})}function x(t,e="info"){const a=document.getElementById("toast-container");if(!a)return;const i=document.createElement("div");i.className=`toast-msg ${e}`;let s="✦";e==="success"&&(s="✓"),e==="danger"&&(s="⚠"),i.innerHTML=`
        <span class="toast-icon">${s}</span>
        <span class="toast-text">${t}</span>
    `,a.appendChild(i),setTimeout(()=>{i.classList.add("show")},10),setTimeout(()=>{i.classList.remove("show"),setTimeout(()=>{i.remove()},350)},3500)}function X(){const t=document.getElementById("app-root");if(!t)return;let e="Monday",a="All",i=null;const s=u=>{const{user:l,bookings:n,classes:o}=u,p=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],d=o.filter(c=>{const b=c.day===e,g=a==="All"||c.category===a;return b&&g}),m=["All","HIIT","Strength","Dance","Yoga","Boxing"];return`
            <div class="page-view active">
                <section class="section-padding">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="text-gradient">Weekly Class Schedule</h2>
                            <p>Select a weekday, filter by training category, and book your spot. Spots are limited to maintain elite coach-to-member ratios.</p>
                        </div>

                        <div class="schedule-header">
                            <!-- Weekday selector -->
                            <div class="schedule-days">
                                ${p.map(c=>`
                                    <button class="day-btn ${e===c?"active":""}" data-day="${c}">
                                        <span>${c.substring(0,3)}</span>
                                        <span>${r(c)}</span>
                                    </button>
                                `).join("")}
                            </div>

                            <!-- Category Filter tabs -->
                            <div class="explorer-tabs" style="margin-top: 30px; margin-bottom: 0;">
                                ${m.map(c=>`
                                    <button class="tab-btn ${a===c?"active":""}" data-filter="${c}" style="padding: 8px 18px; font-size:12px;">
                                        ${c}
                                    </button>
                                `).join("")}
                            </div>
                        </div>

                        <!-- Class Card Grid -->
                        <div class="classes-grid">
                            ${d.length===0?`
                                <div class="glass-card flex-center" style="grid-column: 1 / -1; padding: 60px; text-align: center; color: var(--clr-text-muted);">
                                    <div>
                                        <div style="font-size:40px; margin-bottom:12px;">🗓</div>
                                        <h4>No Classes Scheduled</h4>
                                        <p style="font-size:14px; margin-top:8px;">There are no classes scheduled for ${e} matching "${a}".</p>
                                    </div>
                                </div>
                            `:d.map(c=>{const b=n.includes(c.id),g=c.totalSpots-c.bookedSpots,h=g<=0;let f="";return l.isLoggedIn?b?f=`<button class="btn btn-secondary action-cancel-btn" data-id="${c.id}">Cancel Booking</button>`:h?f='<button class="btn btn-glass" style="opacity:0.5; cursor:not-allowed;" disabled>Fully Booked</button>':f=`<button class="btn btn-primary action-book-btn" data-id="${c.id}">Book Class</button>`:f='<a href="#trial" class="btn btn-primary">Book Class</a>',`
                                    <div class="class-card glass-card">
                                        <div class="class-card-top">
                                            <span class="class-time">${c.time}</span>
                                            <h3 class="class-name">${c.name}</h3>
                                            <div class="class-trainer">Coach: ${c.trainer}</div>
                                            <p style="font-size: 13px; color: var(--clr-text-muted); margin-bottom:12px;">📍 ${c.location}</p>
                                        </div>
                                        
                                        <div>
                                            <div class="class-details-row">
                                                <span>Category: <strong>${c.category}</strong></span>
                                                <span class="spots-count ${h?"full":""}">
                                                    ${h?"FULLY BOOKED":`${g} Spots Left`}
                                                </span>
                                            </div>
                                            ${f}
                                        </div>
                                    </div>
                                `}).join("")}
                        </div>
                    </div>
                </section>
            </div>
        `};function r(u){return{Monday:29,Tuesday:30,Wednesday:1,Thursday:2,Friday:3,Saturday:4,Sunday:5}[u]||1}i=y.subscribe(u=>{t.innerHTML=s(u),t.querySelectorAll(".action-book-btn").forEach(d=>{d.addEventListener("click",()=>{const m=d.getAttribute("data-id"),c=y.bookClass(m);c.success?x(c.message,"success"):x(c.message,"danger")})}),t.querySelectorAll(".action-cancel-btn").forEach(d=>{d.addEventListener("click",()=>{const m=d.getAttribute("data-id"),c=y.cancelBooking(m);c.success?x(c.message,"success"):x(c.message,"danger")})}),t.querySelectorAll(".day-btn").forEach(d=>{d.addEventListener("click",()=>{e=d.getAttribute("data-day"),y.notify()})}),t.querySelectorAll(".tab-btn").forEach(d=>{d.addEventListener("click",()=>{const m=d.getAttribute("data-filter");m&&(a=m,y.notify())})})}),t.cleanup=()=>{i&&i()}}function V(){const t=document.getElementById("app-root");if(!t)return;let e="male";const a=()=>{const{bmiResults:l}=y.getState();return`
            <div class="page-view active">
                <section class="section-padding">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="text-gradient">BMI Fitness Planner</h2>
                            <p>Calculate your Body Mass Index (BMI), Basal Metabolic Rate (BMR), and customize your exact macronutrient target for physical transformation.</p>
                        </div>

                        <div class="bmi-grid">
                            <!-- Calculator Form Card -->
                            <div class="calculator-card glass-card">
                                <h3 style="font-size: 24px; margin-bottom: 24px; text-transform: uppercase;">Body Metrics Form</h3>
                                
                                <form id="bmi-form">
                                    <div class="form-group">
                                        <label>Gender</label>
                                        <div class="gender-select">
                                            <button type="button" class="gender-btn ${e==="male"?"active":""}" data-gender="male">MALE</button>
                                            <button type="button" class="gender-btn ${e==="female"?"active":""}" data-gender="female">FEMALE</button>
                                        </div>
                                    </div>

                                    <div class="grid-2" style="gap: 16px; margin-bottom: 20px;">
                                        <div class="form-group" style="margin-bottom:0;">
                                            <label for="bmi-age">Age (Years)</label>
                                            <input type="number" id="bmi-age" class="form-control" value="25" min="15" max="80" required>
                                        </div>
                                        <div class="form-group" style="margin-bottom:0;">
                                            <label for="bmi-weight">Weight (KG)</label>
                                            <input type="number" id="bmi-weight" class="form-control" value="70" min="30" max="200" required>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="bmi-height">Height (CM)</label>
                                        <input type="number" id="bmi-height" class="form-control" value="175" min="100" max="250" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="bmi-activity">Weekly Activity Level</label>
                                        <select id="bmi-activity" class="form-control">
                                            <option value="sedentary">Sedentary (Little or no exercise)</option>
                                            <option value="light">Lightly Active (1-3 days/week exercise)</option>
                                            <option value="moderate" selected>Moderately Active (3-5 days/week exercise)</option>
                                            <option value="active">Highly Active (6-7 days/week exercise)</option>
                                            <option value="extreme">Extreme Athlete (Double daily training)</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="bmi-goal">Fitness Transformation Goal</label>
                                        <select id="bmi-goal" class="form-control">
                                            <option value="loss">Weight Loss & Fat Shred</option>
                                            <option value="gain" selected>Lean Muscle Gain & Strength</option>
                                            <option value="maintenance">Maintenance & Athletic Performance</option>
                                        </select>
                                    </div>

                                    <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">Calculate Plan</button>
                                </form>
                            </div>

                            <!-- Results Dashboard Card -->
                            <div class="bmi-results-card glass-panel" id="bmi-results-mount">
                                ${i(l)}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `};function i(l){var P;if(!l)return`
                <div class="bmi-placeholder">
                    <div class="bmi-placeholder-icon">📊</div>
                    <h3>Analyze Metrics</h3>
                    <p style="max-width: 320px; margin: 8px auto 0 auto;">Submit your body metrics in the calculator to generate an interactive, customized nutrition and workout blueprint.</p>
                </div>
            `;const{bmi:n,status:o,bmr:p,dailyCalories:d,macros:m}=l,c=m.protein+m.carbs+m.fat,b=Math.round(m.protein/c*100),g=Math.round(m.carbs/c*100),h=100-b-g;let f="normal";o==="Underweight"&&(f="warning"),o==="Overweight"&&(f="warning"),o==="Obese"&&(f="danger");let w="";const{user:C}=y.getState(),E=((P=document.getElementById("bmi-goal"))==null?void 0:P.value)||C.fitnessGoal.toLowerCase();return E==="loss"||E.includes("loss")?w=`
                <div class="rec-item">
                    <span class="rec-icon">⚡</span>
                    <div><strong>Caloric Deficit:</strong> Intake target set 500 calories below maintenance TDEE.</div>
                </div>
                <div class="rec-item">
                    <span class="rec-icon">⚡</span>
                    <div><strong>HIIT Focus:</strong> Schedule 3 high-intensity interval sessions weekly to maximize metabolic burn.</div>
                </div>
                <div class="rec-item">
                    <span class="rec-icon">⚡</span>
                    <div><strong>Fat Shred:</strong> High protein ratio applied to protect lean tissue during deficit.</div>
                </div>
            `:E==="gain"||E.includes("gain")?w=`
                <div class="rec-item">
                    <span class="rec-icon">💪</span>
                    <div><strong>Anabolic Surplus:</strong> Intake target set 400 calories above maintenance TDEE to support hypertrophy.</div>
                </div>
                <div class="rec-item">
                    <span class="rec-icon">💪</span>
                    <div><strong>Strength Focus:</strong> Focus on progressive overload strength classes twice weekly.</div>
                </div>
                <div class="rec-item">
                    <span class="rec-icon">💪</span>
                    <div><strong>Refuel:</strong> High carbohydrate distribution to maintain muscle glycogen levels.</div>
                </div>
            `:w=`
                <div class="rec-item">
                    <span class="rec-icon">🌿</span>
                    <div><strong>Energy Equilibrium:</strong> Target matched perfectly to your daily physical output.</div>
                </div>
                <div class="rec-item">
                    <span class="rec-icon">🌿</span>
                    <div><strong>Balanced Focus:</strong> Combine Yoga Flow, Functional training, and moderate weightlifting.</div>
                </div>
                <div class="rec-item">
                    <span class="rec-icon">🌿</span>
                    <div><strong>Macro Balance:</strong> Balanced distribution of fats and carbs for sustainable stamina.</div>
                </div>
            `,`
            <div class="result-header">
                <div class="bmi-score-box">
                    <span style="font-size: 12px; font-weight: 700; color: var(--clr-text-muted); text-transform: uppercase;">YOUR BMI</span>
                    <span class="bmi-score">${n}</span>
                    <span class="bmi-status-badge ${f}">${o} WEIGHT</span>
                </div>
                <div class="calories-box">
                    <span style="font-size: 12px; font-weight: 700; color: var(--clr-text-muted); text-transform: uppercase;">DAILY CALORIE TARGET</span>
                    <div class="calories-val">${d} <span style="font-size:16px; font-weight:500; color: var(--clr-text-muted);">kcal</span></div>
                    <span style="font-size:12px; color: var(--clr-yellow-primary); font-weight:600;">BMR: ${p} kcal/day</span>
                </div>
            </div>

            <!-- Macro Targets -->
            <div class="macros-container">
                <h4 class="macros-title">Daily Macronutrient Targets</h4>
                <div class="macros-bar">
                    <div class="macro-segment protein" style="width: ${b}%" title="Protein: ${m.protein}g (${b}%)"></div>
                    <div class="macro-segment carbs" style="width: ${g}%" title="Carbs: ${m.carbs}g (${g}%)"></div>
                    <div class="macro-segment fat" style="width: ${h}%" title="Fat: ${m.fat}g (${h}%)"></div>
                </div>
                
                <div class="macros-legend">
                    <div class="legend-item">
                        <div class="legend-dot protein"></div>
                        <div class="legend-info">
                            <span class="legend-name">Protein</span>
                            <span class="ring-legend-progress">${m.protein}g (${b}%)</span>
                        </div>
                    </div>
                    <div class="legend-item">
                        <div class="legend-dot carbs"></div>
                        <div class="legend-info">
                            <span class="legend-name">Carbs</span>
                            <span class="ring-legend-progress">${m.carbs}g (${g}%)</span>
                        </div>
                    </div>
                    <div class="legend-item">
                        <div class="legend-dot fat"></div>
                        <div class="legend-info">
                            <span class="legend-name">Fat</span>
                            <span class="ring-legend-progress">${m.fat}g (${h}%)</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Workout Recommendation list -->
            <div>
                <h4 class="rec-title">Training & Diet Recommendation</h4>
                <div class="rec-list">
                    ${w}
                </div>
            </div>
        `}t.innerHTML=a();const s=t.querySelector("#bmi-form"),r=t.querySelectorAll(".gender-btn"),u=t.querySelector("#bmi-results-mount");r.forEach(l=>{l.addEventListener("click",()=>{r.forEach(n=>n.classList.remove("active")),l.classList.add("active"),e=l.getAttribute("data-gender")})}),s&&s.addEventListener("submit",l=>{l.preventDefault();const n=parseInt(document.getElementById("bmi-age").value),o=parseFloat(document.getElementById("bmi-weight").value),p=parseFloat(document.getElementById("bmi-height").value),d=document.getElementById("bmi-activity").value,m=document.getElementById("bmi-goal").value,c=y.calculateBMI(n,e,p,o,d,m);u&&(u.innerHTML=i(c)),x("Nutrition and Fitness plan updated!","success")})}function q(){const t=document.getElementById("app-root");if(!t)return;let e="Full Body",a=null,i=!1,s="work",r=1,u=0,l=0,n=0,o=$[e],p=o.rounds,d=o.work,m=o.rest,c=[...o.exercises];const b=()=>`
            <div class="page-view active">
                <section class="section-padding">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="text-gradient">HIIT Interval Timer</h2>
                            <p>Build custom high-intensity circuits or select professional templates. Complete intervals to earn XP and level up your conditioning.</p>
                        </div>

                        <div class="hiit-grid">
                            <!-- Setup Panel -->
                            <div class="hiit-setup-card glass-card" id="setup-panel">
                                <h3 style="font-size:20px; margin-bottom:20px; text-transform:uppercase;">Timer Setup</h3>
                                
                                <div class="form-group">
                                    <label>Choose Preset Routine</label>
                                    <div class="preset-selector">
                                        ${Object.keys($).map(v=>`
                                            <button type="button" class="preset-btn ${e===v?"active":""}" data-preset="${v}">${v}</button>
                                        `).join("")}
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Rounds</label>
                                    <div class="number-controls">
                                        <button class="num-btn" id="rounds-minus">−</</button>
                                        <input type="text" class="num-input" id="rounds-val" value="${p}" readonly>
                                        <button class="num-btn" id="rounds-plus">+</button>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Work Duration (Seconds)</label>
                                    <div class="number-controls">
                                        <button class="num-btn" id="work-minus">−</</button>
                                        <input type="text" class="num-input" id="work-val" value="${d}" readonly>
                                        <button class="num-btn" id="work-plus">+</button>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Rest Duration (Seconds)</label>
                                    <div class="number-controls">
                                        <button class="num-btn" id="rest-minus">−</button>
                                        <input type="text" class="num-input" id="rest-val" value="${m}" readonly>
                                        <button class="num-btn" id="rest-plus">+</button>
                                    </div>
                                </div>

                                <button id="start-workout-btn" class="btn btn-primary" style="width:100%; margin-top:20px;">
                                    Start HIIT Circuit
                                </button>
                            </div>

                            <!-- Active Timer Panel -->
                            <div class="hiit-active-card glass-panel" id="active-panel">
                                <div id="timer-idle-content" class="bmi-placeholder">
                                    <div class="bmi-placeholder-icon">⏱</div>
                                    <h3>Ready to Train</h3>
                                    <p style="max-width:320px; margin: 8px auto 0 auto;">Configure your interval options or tap "Start HIIT Circuit" to begin tracking your workout.</p>
                                </div>

                                <div id="timer-active-content" style="display:none; width:100%;">
                                    <div class="timer-circle-container">
                                        <svg class="timer-svg">
                                            <circle class="timer-track-ring" cx="140" cy="140" r="130"></circle>
                                            <circle class="timer-progress-ring" id="progress-circle" cx="140" cy="140" r="130" stroke-dasharray="816.8" stroke-dashoffset="0"></circle>
                                        </svg>
                                        <div class="timer-display">
                                            <span class="timer-sec" id="timer-time-display">30</span>
                                            <span class="timer-phase" id="timer-phase-display">WORK</span>
                                        </div>
                                    </div>

                                    <div class="timer-exercise-info">
                                        <div class="current-exercise" id="current-exercise-display">JUMPING JACKS</div>
                                        <div class="next-exercise-label" id="next-exercise-display">Next: Rest (15s)</div>
                                    </div>

                                    <div class="timer-round-info" id="round-display">
                                        ROUND 1 / 4
                                    </div>

                                    <div class="timer-controls">
                                        <button class="btn btn-glass" id="timer-play-pause-btn" style="min-width: 120px;">PLAY</button>
                                        <button class="btn btn-secondary" id="timer-reset-btn">RESET</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;t.innerHTML=b();const g=t.querySelector("#setup-panel");t.querySelector("#active-panel");const h=()=>{t.querySelector("#rounds-val").value=p,t.querySelector("#work-val").value=d,t.querySelector("#rest-val").value=m};g.addEventListener("click",v=>{const S=v.target.closest(".preset-btn");S&&(g.querySelectorAll(".preset-btn").forEach(k=>k.classList.remove("active")),S.classList.add("active"),e=S.getAttribute("data-preset"),o=$[e],p=o.rounds,d=o.work,m=o.rest,c=[...o.exercises],h())}),g.querySelector("#rounds-minus").addEventListener("click",()=>{p>1&&(p--,h())}),g.querySelector("#rounds-plus").addEventListener("click",()=>{p<10&&(p++,h())}),g.querySelector("#work-minus").addEventListener("click",()=>{d>10&&(d-=5,h())}),g.querySelector("#work-plus").addEventListener("click",()=>{d<300&&(d+=5,h())}),g.querySelector("#rest-minus").addEventListener("click",()=>{m>5&&(m-=5,h())}),g.querySelector("#rest-plus").addEventListener("click",()=>{m<180&&(m+=5,h())}),g.querySelector("#start-workout-btn").addEventListener("click",()=>{I.init(),f()});function f(){document.getElementById("timer-idle-content").style.display="none",document.getElementById("timer-active-content").style.display="block",i=!0,s="work",r=1,u=0,w(s);const v=document.getElementById("timer-play-pause-btn");v.innerText="PAUSE",v.className="btn btn-primary",v.onclick=P,document.getElementById("timer-reset-btn").onclick=N,a&&clearInterval(a),a=setInterval(C,100),I.playHighStart(),x("Interval timer started! Focus!","info")}function w(v){s=v;const S=document.getElementById("progress-circle"),k=document.getElementById("timer-phase-display");if(document.getElementById("timer-time-display"),v==="work"){n=d*1e3,l=n,k.innerText="WORK",k.className="timer-phase",S.classList.remove("rest");const T=c[u%c.length];document.getElementById("current-exercise-display").innerText=T,document.getElementById("next-exercise-display").innerText=`Next: Rest (${m}s)`}else{n=m*1e3,l=n,k.innerText="REST",k.className="timer-phase rest",S.classList.add("rest"),document.getElementById("current-exercise-display").innerText="REST / RECOVER";const T=(u+1)%c.length,M=c[T];r>=p?document.getElementById("next-exercise-display").innerText="Next: Complete!":document.getElementById("next-exercise-display").innerText=`Next: ${M} (${d}s)`}document.getElementById("round-display").innerText=`ROUND ${r} / ${p}`,E()}function C(){if(!i)return;l-=100;const v=Math.ceil(l/1e3),S=l%1e3;v<=3&&v>0&&S===0&&I.playShortLow(),l<=0?(I.playHighStart(),s==="work"?r>=p?D(!0):w("rest"):(r++,u++,w("work"))):E()}function E(){const v=document.getElementById("timer-time-display"),S=document.getElementById("progress-circle");if(!v||!S)return;const k=Math.max(0,Math.ceil(l/1e3));v.innerText=k;const M=816.8*(1-Math.max(0,l/n));S.style.strokeDashoffset=M}function P(){i=!i;const v=document.getElementById("timer-play-pause-btn");i?(v.innerText="PAUSE",v.className="btn btn-primary",x("Timer Resumed","info")):(v.innerText="PLAY",v.className="btn btn-glass",x("Timer Paused","info"))}function N(){D(!1),x("Timer Reset","info")}function D(v=!1){if(a&&(clearInterval(a),a=null),i=!1,v){I.playSuccessChime();const S=p*40+p*(d/30)*15,k=Math.round((p*d+(p-1)*m)/60);y.completeHIITWorkout(`${e} Circuit`,k,Math.round(S));const T=document.getElementById("timer-active-content");T.innerHTML=`
                <div class="modal-icon-box" style="margin-top:24px;">✓</div>
                <h2 class="text-gradient" style="font-size:36px; text-transform:uppercase; margin-bottom:12px;">Workout Complete!</h2>
                <p style="color:var(--clr-text-muted); margin-bottom:24px;">Outstanding effort! You crushed the HIIT interval circuit.</p>
                
                <div class="pass-code-container" style="max-width: 320px; margin: 0 auto 30px auto;">
                    <div class="pass-code-lbl">STREAK & XP EARNED</div>
                    <div class="pass-code-val" style="font-size:24px;">+250 XP</div>
                    <div style="font-size:12px; margin-top:4px; font-weight:600; color:var(--clr-success);">Daily Burn Updated!</div>
                </div>

                <div style="display:flex; justify-content:center; gap:16px;">
                    <button class="btn btn-primary" id="timer-finish-btn">Go to Dashboard</button>
                    <button class="btn btn-secondary" id="timer-restart-btn">Train Again</button>
                </div>
            `,document.getElementById("timer-finish-btn").onclick=()=>{window.location.hash="dashboard"},document.getElementById("timer-restart-btn").onclick=()=>{q()}}else document.getElementById("timer-idle-content").style.display="block",document.getElementById("timer-active-content").style.display="none"}}function Q(){const t=document.getElementById("app-root");if(!t)return;let e=null;const a=i=>{const{user:s,bookings:r,classes:u,workoutHistory:l}=i;if(!s.isLoggedIn)return`
                <div class="page-view active">
                    <section class="section-padding flex-center" style="min-height: 70vh;">
                        <div class="glass-card" style="padding: 48px; text-align: center; max-width: 480px;">
                            <div class="bmi-placeholder-icon">🔒</div>
                            <h2 class="text-gradient" style="font-size:32px; margin-bottom:16px; text-transform:uppercase;">Member Area Locked</h2>
                            <p style="color: var(--clr-text-muted); margin-bottom: 30px;">
                                Access to the custom stats dashboard, activity rings, and your digital access pass requires an active membership or free trial registration.
                            </p>
                            <a href="#trial" class="btn btn-primary" style="width: 100%;">Get Free Trial Pass</a>
                        </div>
                    </section>
                </div>
            `;const n=Math.min(1,s.caloriesBurned/s.targetCalories),o=Math.min(1,s.activeMinutes/s.targetMinutes),p=Math.min(1,s.completedWorkouts/s.targetWorkouts),d=502.6*(1-n),m=377*(1-o),c=251.3*(1-p),b=r.map(g=>u.find(h=>h.id===g)).filter(Boolean);return`
            <div class="page-view active">
                <section class="section-padding">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="text-gradient">Member Portal</h2>
                            <p>Track your physical progress, view dynamic biological activity metrics, access your virtual NFC terminal pass, and manage weekly class reservations.</p>
                        </div>

                        <div class="dashboard-grid">
                            <!-- Left Sidebar: Profile & Pass -->
                            <div class="dashboard-sidebar" style="display:flex; flex-direction:column; gap:30px;">
                                <!-- Profile Card -->
                                <div class="profile-card glass-card">
                                    <div class="profile-header">
                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop" alt="${s.name}" class="profile-avatar">
                                        <div>
                                            <h3 class="profile-name">${s.name}</h3>
                                            <span class="profile-tier ${s.membershipType.toLowerCase().replace(" ","-")}">${s.membershipType}</span>
                                        </div>
                                    </div>
                                    
                                    <div class="stats-bar-group">
                                        <div class="dashboard-stat-row">
                                            <span class="stat-row-lbl">Fitness Streak</span>
                                            <span class="stat-row-val" style="color:var(--clr-yellow-primary);">🔥 ${s.streak} Days</span>
                                        </div>
                                        <div class="dashboard-stat-row">
                                            <span class="stat-row-lbl">Pulse Experience Points</span>
                                            <span class="stat-row-val" style="color:var(--clr-orange-primary);">${s.xp} XP</span>
                                        </div>
                                    </div>

                                    <!-- Digital Access Pass -->
                                    <div class="digital-pass-card ${s.membershipType.toLowerCase().includes("elite")?"elite":""}">
                                        <div class="pass-header">
                                            <div class="pass-logo">PULSE<span>FORGE.</span></div>
                                            <div class="pass-badge ${s.membershipType.toLowerCase().includes("elite")?"elite":""}">NFC PASS</div>
                                        </div>
                                        
                                        <!-- Simulating QR code with SVGs or styling -->
                                        <div class="pass-qr-box">
                                            <svg class="pass-qr-image" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Custom QR Code outline styling -->
                                                <rect width="25" height="25" fill="#121212" />
                                                <rect x="5" y="5" width="15" height="15" fill="none" stroke="var(--clr-orange-primary)" stroke-width="3" />
                                                <rect x="75" y="0" width="25" height="25" fill="#121212" />
                                                <rect x="80" y="5" width="15" height="15" fill="none" stroke="var(--clr-orange-primary)" stroke-width="3" />
                                                <rect x="0" y="75" width="25" height="25" fill="#121212" />
                                                <rect x="5" y="80" width="15" height="15" fill="none" stroke="var(--clr-orange-primary)" stroke-width="3" />
                                                
                                                <rect x="35" y="10" width="8" height="8" fill="#121212" />
                                                <rect x="45" y="25" width="12" height="12" fill="var(--clr-yellow-primary)" />
                                                <rect x="15" y="45" width="10" height="20" fill="var(--clr-orange-primary)" />
                                                <rect x="45" y="50" width="20" height="10" fill="#121212" />
                                                <rect x="65" y="70" width="10" height="10" fill="var(--clr-yellow-primary)" />
                                                <rect x="30" y="75" width="15" height="15" fill="var(--clr-orange-primary)" />
                                                <rect x="80" y="40" width="10" height="20" fill="#121212" />
                                            </svg>
                                        </div>

                                        <div class="pass-details">
                                            <div class="pass-detail-item">
                                                <span class="pass-detail-lbl">MEMBER ID</span>
                                                <span class="pass-detail-val">${s.membershipCode}</span>
                                            </div>
                                            <div class="pass-detail-item" style="text-align:right;">
                                                <span class="pass-detail-lbl">EXPIRY DATE</span>
                                                <span class="pass-detail-val">${s.expiryDate}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Right Main: Activity Rings & Bookings -->
                            <div class="dashboard-main">
                                <!-- Activity Rings Card -->
                                <div class="rings-card glass-card">
                                    <div class="rings-visual">
                                        <svg class="ring-svg" viewBox="0 0 200 200">
                                            <!-- Calories Ring (Outer) -->
                                            <circle class="ring-track" cx="100" cy="100" r="80" stroke-width="12"></circle>
                                            <circle class="ring-bar calories" cx="100" cy="100" r="80" stroke-width="12" 
                                                    stroke-dasharray="502.6" stroke-dashoffset="${d}"></circle>
                                            
                                            <!-- Minutes Ring (Middle) -->
                                            <circle class="ring-track" cx="100" cy="100" r="60" stroke-width="12"></circle>
                                            <circle class="ring-bar minutes" cx="100" cy="100" r="60" stroke-width="12" 
                                                    stroke-dasharray="377" stroke-dashoffset="${m}"></circle>
                                            
                                            <!-- Workouts Ring (Inner) -->
                                            <circle class="ring-track" cx="100" cy="100" r="40" stroke-width="12"></circle>
                                            <circle class="ring-bar workouts" cx="100" cy="100" r="40" stroke-width="12" 
                                                    stroke-dasharray="251.3" stroke-dashoffset="${c}"></circle>
                                        </svg>
                                    </div>

                                    <div class="rings-legend">
                                        <h3 style="font-size: 20px; text-transform: uppercase;">Daily Performance</h3>
                                        <div class="ring-legend-item">
                                            <div class="ring-indicator calories"></div>
                                            <div class="ring-legend-info">
                                                <span class="ring-legend-name">Active Calories</span>
                                                <div class="ring-legend-progress">${s.caloriesBurned} / ${s.targetCalories} kcal (${Math.round(n*100)}%)</div>
                                            </div>
                                        </div>
                                        <div class="ring-legend-item">
                                            <div class="ring-indicator minutes"></div>
                                            <div class="ring-legend-info">
                                                <span class="ring-legend-name">Active Minutes</span>
                                                <div class="ring-legend-progress">${s.activeMinutes} / ${s.targetMinutes} mins (${Math.round(o*100)}%)</div>
                                            </div>
                                        </div>
                                        <div class="ring-legend-item">
                                            <div class="ring-indicator workouts"></div>
                                            <div class="ring-legend-info">
                                                <span class="ring-legend-name">Workouts Completed</span>
                                                <div class="ring-legend-progress">${s.completedWorkouts} / ${s.targetWorkouts} sessions (${Math.round(p*100)}%)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Upcoming Bookings Card -->
                                <div class="bookings-card glass-panel">
                                    <div class="bookings-header">
                                        <h3 style="font-size:20px; text-transform:uppercase;">Reserved Class Bookings</h3>
                                        <span class="spots-count" style="font-size: 14px; font-weight:700;">${b.length} Booked</span>
                                    </div>

                                    <div class="bookings-list">
                                        ${b.length===0?`
                                            <div class="no-bookings-view">
                                                <div class="no-bookings-icon">🗓</div>
                                                <h4>No Bookings Scheduled</h4>
                                                <p style="font-size:14px; margin-top:8px;">Head to the Classes section to reserve your workout spot.</p>
                                                <a href="#classes" class="btn btn-secondary" style="margin-top:20px; padding:10px 20px; font-size:12px;">Browse Schedule</a>
                                            </div>
                                        `:b.map(g=>`
                                            <div class="dashboard-booking-item">
                                                <div class="booking-info-main">
                                                    <div class="booking-icon-box">
                                                        ${g.category.substring(0,2).toUpperCase()}
                                                    </div>
                                                    <div class="booking-name-details">
                                                        <h4>${g.name}</h4>
                                                        <p>${g.time} | Coach: ${g.trainer}</p>
                                                        <p style="color:var(--clr-yellow-primary); font-size:11px;">📍 ${g.location}</p>
                                                    </div>
                                                </div>
                                                <button class="btn btn-glass cancel-booking-btn" data-id="${g.id}" style="padding: 8px 16px; font-size: 12px;">
                                                    CANCEL
                                                </button>
                                            </div>
                                        `).join("")}
                                    </div>
                                </div>

                                <!-- Workout History -->
                                <div class="bookings-card glass-panel">
                                    <h3 style="font-size:20px; text-transform:uppercase; margin-bottom:20px;">Workout History Log</h3>
                                    <div class="bookings-list">
                                        ${l.length===0?`
                                            <p style="color: var(--clr-text-muted); text-align:center; padding: 20px 0;">No exercises completed yet. Finish a HIIT workout to record logs.</p>
                                        `:l.map(g=>`
                                            <div class="dashboard-booking-item" style="padding: 12px 20px; background: rgba(255,255,255,0.015);">
                                                <div style="display:flex; flex-direction:column;">
                                                    <span style="font-size:14px; font-weight:700;">${g.name}</span>
                                                    <span style="font-size:11px; color:var(--clr-text-muted);">${g.date} | Duration: ${g.duration}</span>
                                                </div>
                                                <span style="font-family:var(--font-heading); font-weight:700; color:var(--clr-orange-primary);">${g.calories} kcal burned</span>
                                            </div>
                                        `).join("")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `};e=y.subscribe(i=>{t.innerHTML=a(i),t.querySelectorAll(".cancel-booking-btn").forEach(r=>{r.addEventListener("click",u=>{const l=r.getAttribute("data-id"),n=y.cancelBooking(l);n.success&&x(n.message,"success")})})}),t.cleanup=()=>{e&&e()}}function _(){const t=document.getElementById("app-root");if(!t)return;const e=()=>`
            <div class="page-view active">
                <section class="section-padding">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="text-gradient">Pulse Elite Coaches</h2>
                            <p>Train with industry-leading physical development coaches, international yoga experts, and professional combat athletes.</p>
                        </div>

                        <!-- Trainers grid -->
                        <div class="grid-4" id="trainers-grid-container">
                            ${Object.values(B).map(n=>`
                                <div class="trainer-card glass-card" data-id="${n.id}">
                                    <div class="trainer-card-img-box">
                                        <img src="${n.image}" alt="${n.name}" class="trainer-card-img" loading="lazy">
                                        <div class="trainer-card-overlay"></div>
                                    </div>
                                    <div class="trainer-card-info">
                                        <h3 class="trainer-card-name">${n.name}</h3>
                                        <div class="trainer-card-spec">${n.specialization}</div>
                                        <span class="trainer-card-exp">${n.experience}</span>
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                </section>

                <!-- Detailed Slide Drawer Panel (Initially Hidden) -->
                <div class="drawer-overlay" id="trainer-drawer-overlay"></div>
                <div class="drawer-panel" id="trainer-drawer-panel">
                    <button class="drawer-close-btn" id="drawer-close" aria-label="Close panel">×</button>
                    
                    <div class="drawer-img-box">
                        <img src="" alt="" class="drawer-img" id="drawer-tr-img">
                        <div class="drawer-img-overlay"></div>
                    </div>

                    <div class="drawer-body">
                        <span class="drawer-spec" id="drawer-tr-spec">COACH SPECIALIZATION</span>
                        <h2 class="drawer-name" id="drawer-tr-name">Coach Name</h2>
                        
                        <div class="drawer-stats">
                            <div class="drawer-stat-item">
                                <span class="drawer-stat-lbl">EXPERIENCE</span>
                                <span class="drawer-stat-val" id="drawer-tr-exp">10 Years</span>
                            </div>
                            <div class="drawer-stat-item">
                                <span class="drawer-stat-lbl">RECOGNITIONS</span>
                                <span class="drawer-stat-val" id="drawer-tr-rec">3 Accreditations</span>
                            </div>
                        </div>

                        <p class="drawer-bio" id="drawer-tr-bio">Trainer bio goes here...</p>
                        
                        <div class="drawer-achievements">
                            <h4 class="drawer-achievements-title">Achievements & Credentials</h4>
                            <ul class="drawer-achievements-list" id="drawer-tr-ach-list">
                                <!-- Bullet items -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;t.innerHTML=e();const a=t.querySelectorAll(".trainer-card"),i=t.querySelector("#trainer-drawer-overlay"),s=t.querySelector("#trainer-drawer-panel"),r=t.querySelector("#drawer-close"),u=n=>{const o=B[n];if(!o)return;t.querySelector("#drawer-tr-img").src=o.image,t.querySelector("#drawer-tr-img").alt=o.name,t.querySelector("#drawer-tr-spec").innerText=o.specialization,t.querySelector("#drawer-tr-name").innerText=o.name,t.querySelector("#drawer-tr-exp").innerText=o.experience,t.querySelector("#drawer-tr-rec").innerText=`${o.achievements.length} Certifications`,t.querySelector("#drawer-tr-bio").innerText=o.bio;const p=t.querySelector("#drawer-tr-ach-list");p.innerHTML=o.achievements.map(d=>`
            <li class="drawer-ach-item">
                <span class="drawer-ach-dot"></span>
                <span>${d}</span>
            </li>
        `).join(""),i.classList.add("open"),s.classList.add("open"),document.body.style.overflow="hidden"},l=()=>{i.classList.remove("open"),s.classList.remove("open"),document.body.style.overflow=""};a.forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-id");u(o)})}),r.addEventListener("click",l),i.addEventListener("click",l)}function Z(){const t=document.getElementById("app-root");if(!t)return;let e=null;const a=i=>{const{user:s}=i;return`
            <div class="page-view active">
                <section class="section-padding">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="text-gradient">Pulse membership Plans</h2>
                            <p>Choose your pathway to elite conditioning. Upgrade or activate your pass to unlock multi-center access, private trainer support, and luxury club amenities.</p>
                        </div>

                        <!-- Pricing Cards Grid -->
                        <div class="grid-3 pricing-cards">
                            ${G.map(r=>{const u=s.isLoggedIn&&s.membershipType.toLowerCase().includes(r.name.split(" ")[0].toLowerCase()),l=u?"CURRENT ACTIVE PLAN":s.isLoggedIn?"UPGRADE PLAN":"SELECT PLAN",n=r.isElite?"btn btn-primary":"btn btn-glass";return`
                                    <div class="pricing-card glass-card ${r.isElite?"elite glow-border":""}">
                                        ${r.isElite?'<span class="pricing-badge">RECOMMENDED</span>':""}
                                        <h3 class="pricing-tier-name">${r.name}</h3>
                                        
                                        <div class="pricing-price-box">
                                            <span class="price-currency">₹</span>
                                            <span class="price-amount">${r.price}</span>
                                            <span class="price-period">${r.period}</span>
                                        </div>

                                        <ul class="pricing-features-list">
                                            ${r.features.map(o=>`
                                                <li class="pricing-feature-item ${o.included?"":"muted"}">
                                                    <span class="pricing-feature-icon">${o.included?"✓":"✕"}</span>
                                                    <span>${o.text}</span>
                                                </li>
                                            `).join("")}
                                        </ul>

                                        <button class="pricing-cta-btn ${n}" 
                                                data-id="${r.id}" 
                                                ${u?'disabled style="cursor:not-allowed; opacity:0.6;"':""}>
                                            ${l}
                                        </button>
                                    </div>
                                `}).join("")}
                        </div>
                    </div>
                </section>
            </div>
        `};e=y.subscribe(i=>{t.innerHTML=a(i),t.querySelectorAll(".pricing-cta-btn").forEach(r=>{r.addEventListener("click",()=>{const u=r.getAttribute("data-id"),{user:l}=y.getState();if(!l.isLoggedIn){x("Please register for a Free Trial pass first!","info"),window.location.hash="trial";return}const n=y.purchaseMembership(u);n.success&&(x(n.message,"success"),setTimeout(()=>{window.location.hash="dashboard"},500))})})}),t.cleanup=()=>{e&&e()}}function ee(){const t=document.getElementById("app-root");if(!t)return;const e=()=>`
            <div class="page-view active">
                <section class="section-padding">
                    <div class="container">
                        <div class="trial-container">
                            <div class="trial-card glass-panel">
                                <h2 class="text-gradient">Claim Free Trial</h2>
                                <p class="subtitle">Join the elite Pulseforge ecosystem. Complete your registration to instantly generate a 7-day digital gym access pass.</p>

                                <form id="trial-form" novalidate>
                                    <div class="form-group">
                                        <label for="trial-name">Full Name</label>
                                        <input type="text" id="trial-name" class="form-control" placeholder="Enter your full name" required>
                                        <span class="error-msg" id="err-name" style="color:var(--clr-danger); font-size:12px; display:none; margin-top:4px;"></span>
                                    </div>

                                    <div class="form-group">
                                        <label for="trial-email">Email Address</label>
                                        <input type="email" id="trial-email" class="form-control" placeholder="name@domain.com" required>
                                        <span class="error-msg" id="err-email" style="color:var(--clr-danger); font-size:12px; display:none; margin-top:4px;"></span>
                                    </div>

                                    <div class="form-group">
                                        <label for="trial-phone">Mobile Number</label>
                                        <input type="tel" id="trial-phone" class="form-control" placeholder="10-digit number" required>
                                        <span class="error-msg" id="err-phone" style="color:var(--clr-danger); font-size:12px; display:none; margin-top:4px;"></span>
                                    </div>

                                    <div class="form-group">
                                        <label for="trial-center">Preferred Fitness Center</label>
                                        <select id="trial-center" class="form-control" required>
                                            <option value="" disabled selected>Select location near you</option>
                                            <option value="Pulse Studio, Indiranagar">Pulse Studio, Indiranagar (Bengaluru)</option>
                                            <option value="Pulse Center, Bandra">Pulse Center, Bandra (Mumbai)</option>
                                            <option value="Pulse Center, South Delhi">Pulse Center, South Delhi (New Delhi)</option>
                                        </select>
                                        <span class="error-msg" id="err-center" style="color:var(--clr-danger); font-size:12px; display:none; margin-top:4px;"></span>
                                    </div>

                                    <div class="form-group">
                                        <label for="trial-goal">What is your primary fitness goal?</label>
                                        <select id="trial-goal" class="form-control">
                                            <option value="Weight Loss">Weight Loss & Conditioning</option>
                                            <option value="Muscle Gain" selected>Muscle Gain & Strength</option>
                                            <option value="Stamina">Cardiovascular Stamina</option>
                                            <option value="Mindfulness">Mindfulness & Yoga Flow</option>
                                        </select>
                                    </div>

                                    <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 15px;">Generate Access Pass</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Success Confirmation Modal Overlay (Initially Hidden) -->
                <div class="modal-overlay" id="success-modal-overlay">
                    <div class="modal-container">
                        <div class="modal-icon-box">✓</div>
                        <h3 class="modal-title text-gradient">Pass Activated!</h3>
                        <p class="modal-desc">Your 7-day complimentary pass is active. Show the QR pass on your dashboard at the reception terminal.</p>
                        
                        <div class="pass-code-container">
                            <span class="pass-code-lbl">YOUR DIGITAL ACCESS CODE</span>
                            <div class="pass-code-val" id="modal-pass-code">PF-000000</div>
                        </div>

                        <button class="btn btn-primary" id="modal-enter-btn" style="width: 100%;">Enter Member Portal</button>
                    </div>
                </div>
            </div>
        `;t.innerHTML=e();const a=t.querySelector("#trial-form"),i=t.querySelector("#success-modal-overlay"),s=t.querySelector("#modal-pass-code"),r=t.querySelector("#modal-enter-btn"),u=()=>{t.querySelectorAll(".error-msg").forEach(n=>{n.style.display="none",n.innerText=""}),t.querySelectorAll(".form-control").forEach(n=>{n.style.borderColor=""})},l=n=>{Object.keys(n).forEach(o=>{const p=t.querySelector(`#err-${o}`),d=t.querySelector(`#trial-${o}`);p&&(p.innerText=n[o],p.style.display="block"),d&&(d.style.borderColor="var(--clr-danger)")})};a&&a.addEventListener("submit",n=>{n.preventDefault(),u();const o={name:t.querySelector("#trial-name").value,email:t.querySelector("#trial-email").value,phone:t.querySelector("#trial-phone").value,center:t.querySelector("#trial-center").value,fitnessGoal:t.querySelector("#trial-goal").value},p=Y(o);if(!p.isValid){l(p.errors),x("Please correct the form fields.","danger");return}const d=y.registerTrial(o);s.innerText=d.membershipCode,i.classList.add("open"),document.body.style.overflow="hidden",x("Free Trial activated!","success")}),r&&r.addEventListener("click",()=>{i.classList.remove("open"),document.body.style.overflow="",window.location.hash="dashboard"})}const H={home:J,classes:X,bmi:V,hiit:q,dashboard:Q,trainers:_,membership:Z,trial:ee};function F(){const t=document.getElementById("app-root");if(!t)return;if(t.cleanup&&typeof t.cleanup=="function"){try{t.cleanup()}catch(i){console.error("Error during component cleanup:",i)}t.cleanup=null}let e=window.location.hash.substring(1).toLowerCase();if((!e||!H[e])&&(e="home",!window.location.hash)){window.location.hash="home";return}t.cleanup=null,window.scrollTo({top:0});const a=H[e];a(),R(e)}function O(){R("home"),K(),window.addEventListener("hashchange",F),F(),y.subscribe(t=>{const e=window.location.hash.substring(1).toLowerCase()||"home";R(e)})}document.addEventListener("DOMContentLoaded",O);(document.readyState==="interactive"||document.readyState==="complete")&&O();

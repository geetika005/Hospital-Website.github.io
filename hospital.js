function heart() {

    document.getElementById("heartpara").innerHTML = "When your heart doesn’t get the care it needs, serious problems can develop in the lining of the arteries, which then lead to plaque formation.  Plaque is what leads to heart attacks and blockage of blood flow in the arteries. Understand the conditions that affect your heart and the habits that can help prevent or manage them. Taking action will help you keep your ticker in top shape.When you go for a checkup, your doctor uses a stethoscope to listen carefully to your heart. A healthy heart makes a lub-dub sound with each beat. This sound comes from the valves shutting on the blood inside the heart."
    var img = document.createElement('img');
    img.src = 'heart.jpeg';

    document.getElementById('heartpara').appendChild(img);
}

function spine() {
    document.getElementById("heartpara").innerHTML = "Diagnosing your back or neck pain begins with a physical examination and includes an evaluation of your medical history and symptoms. Your doctor may perform special maneuvers (movements) to help diagnose your condition—but the details you provide during the exam are just as important to determine the source of your spine pain. The physical exam, like all spinal diagnostic tests, is most successful when both doctor and patient work together to find the cause of pain.";
    var img = document.createElement('img');
    img.src = 'spine.jpg';
    img.setAttribute('width', '20%');
    document.getElementById('heartpara').appendChild(img);
}

function ortho() {
    document.getElementById("heartpara").innerHTML = "General physicians who elect to study orthopedics must complete approximately 14 years of training prior to becoming a certified orthopedic surgeon. According to The American Board of Orthopaedic Surgeons, orthopedic surgery includes pediatric orthopedics, sports medicine, arthritis treatment including joint replacement and surgery, foot and ankle, hand, shoulder, elbows, spine, trauma and fractures, musculoskeletal oncology, musculoskeletal rehabilitation, arthroscopy, and arthroscopic surgery.";
    var img = document.createElement('img');
    img.src = 'orthoimg.jpg';
    img.setAttribute('width', '30%');
    document.getElementById('heartpara').appendChild(img);

}

function brain() {
    document.getElementById("heartpara").innerHTML = "What makes a healthy brain?Extensive research involving numerous studies have explored what individuals can do to maintain, or even increase, brain volume andPrimarily these include diet, exercise, sleep, activities that stimulate the intellect, controlling risk factorsfor chronic disease, and emotional attachments.";

    var img = document.createElement('img');
    img.src = 'brain.jpeg';
    img.setAttribute('width', '30%');
    document.getElementById('heartpara').appendChild(img);
}
let a;
let time;

setInterval(() => {
    a = new Date()
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();

    document.getElementById('navtime').innerHTML = time;
}, 1000);

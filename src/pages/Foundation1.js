import React, { useState } from "react";
import './Foundation1.css';
import Navbar from "./Navbar";
function Foundation1() {
  const [searchQuery, setSearchQuery] = useState('');
  const [setSelectedOption] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="foundation-container">
        <h3 className="foundation-title">Bettertogether Pets</h3>
        <h1 className="foundation-title">FOUNDATION</h1>
        <img src="/path/to/your/image.jpg" alt="Foundation" className="foundation-image" />
        <h3 className="foundation-title">มูลนิธิบ้านสงเคราะห์สัตว์พิการ</h3>
        <p>มูลนิธิบ้านสงเคราะห์สัตว์พิการ มีจุดเริ่มต้นจากครอบครัวคุณพิมพ์กุล โอฬารศิรโรจน์ (เรณู จุลสุคนธ์) ที่ได้ช่วยเหลือสัตว์ต่างๆ ที่พิการจนหายจากการเจ็บป่วย จึงเลี้ยงไว้เป็นเพื่อนแก้เหงา แต่เมื่อเพิ่มจำนวนมากขึ้น สถานที่คับแคบ และเป็นภาระที่ต้องเลี้ยงดู ประกอบกับสัตว์ส่งเสียงดัง ส่งกลิ่นรบกวนเพื่อนบ้าน จึงต้องย้ายสถานที่เลี้ยงออกไปนอกเมือง โดยตั้งชื่อว่า “บ้านสงเคราะห์สัตว์พิการ” ในปี พ.ศ. 2524
        ขณะนี้มูลนิธิฯ เริ่มเป็นที่รู้จักของบุคคลภายนอกมากยิ่งขึ้น ผลสะท้อนที่ส่งกลับมายังมูลนิธิฯ ได้ 2 ทาง กล่าวคือ ได้มีผู้ที่เข้ามาบริจาคสิ่งของ อาหาร ยาและปัจจัยเพิ่มขึ้น เป็นสิ่งดีงามที่มูลนิธิฯ ได้มีโอกาสช่วยเหลือสัตว์และเพื่อนร่วมเลี้ยงสัตว์ด้วยกัน แต่ในขณะเดียวกันก็มีจำนวนสัตว์พิการถูกทอดทิ้งหลั่งไหลเข้ามาอยู่ในความดูแลรับผิดชอบของมูลนิธิฯ เพิ่มมากขึ้นอย่างรวดเร็วเช่นกัน ทำให้สุนัขและแมวอยู่กันอย่างแออัด ส่งผลให้สุขภาพสัตว์ไม่แข็งแรง โดยเฉพาะสุนัขที่ทุพพลภาพพิการ และสุนัข-แมว ที่เป็นโรคผิวหนังเป็นต้น จากปัญหาดังกล่าวข้างต้นเป็นสิ่งกดดันให้มูลนิธิฯ พร้อมคณะกรรมการเล็งเห็นความสำคัญในเรื่องที่อยู่อาศัยของสัตว์พิการและ จรจัดเหล่านี้ ให้มีที่อยู่อย่างเพียงพอ</p>
    </div>
    <footer className="footer">
        <p>&copy; 2024 Your Organization. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Foundation1;

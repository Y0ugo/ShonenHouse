import { Injectable } from '@angular/core';
import { Mangas_model } from 'src/app/Model/Mangas_model';

@Injectable({
  providedIn: 'root'
})
export class MangasService {

public list_mangas : Mangas_model[] = [
    new Mangas_model('Bleach','Tite Kubo','57','../../assets/Mangas/Bleach/bleach.jpg', '../../assets/Mangas/Bleach/bleach_12.jpeg','../../assets/Mangas/Bleach/bleach.mp4','6.95',153,1655),

    new Mangas_model('Bluelock','Kaneshiro Muneyuki','7','../../assets/Mangas/Bluelock/bluelock.jpeg','../../assets/Mangas/Bluelock/bluelock.jpg','../../assets/Mangas/Bluelock/bluelock.mp4','6.95',127,1269),

    new Mangas_model('Chainsaw man','Tatsuki Fujimoto','1','../../assets/Mangas/Chainsawman/chainsawman.jpg','../../assets/Mangas/Chainsawman/chainsawManHeader.jpg','../../assets/Mangas/Chainsawman/chainsawman.mp4','6.95',264,1369),

    new Mangas_model('Death Note','Tsugumi Ōba ','1','../../assets/Mangas/Death_note/death_note.jpg','../../assets/Mangas/Death_note/death_1.jpg','../../assets/Mangas/Death_note/deathnote.mp4','6.95',166,1365),

    new Mangas_model('Demon slayer','Koyoharu Gotōge','8','../../assets/Mangas/Demon_slayer/demonslayer.jpg','../../assets/Mangas/Demon_slayer/1.jpg','../../assets/Mangas/Demon_slayer/demonslayer.mp4','6.95',126,1465),

    new Mangas_model('Fire force','Atsushi Ōkubo','17','../../assets/Mangas/Fire_force/fireforce.jpg','../../assets/Mangas/Fire_force/13.jpg','../../assets/Mangas/Fire_force/Fire_force.mp4','6.95',116,1455),

    new Mangas_model('Jujustu kaisen','Gege Akutami','14','../../assets/Mangas/Jujutsu_kaisen/jujutsuKaisen.jpg','../../assets/Mangas/Jujutsu_kaisen/JujutsuKaisen.jpeg','../../assets/Mangas/Jujutsu_kaisen/12.mp4','6.95',216,1855),

    new Mangas_model('Naruto','Masashi Kishimoto','58','../../assets/Mangas/Naruto/naruto.jpg','../../assets/Mangas/Naruto/naruto_4.jpg','../../assets/Mangas/Naruto/naruto.mp4','6.95',364,1578),

    new Mangas_model('One piece','Eiichirō Oda','98','../../assets/Mangas/One_piece/onepiece.jpeg','../../assets/Mangas/One_piece/606284.jpg','../../assets/Mangas/One_piece/onepiece.mp4','6.95',263,1368),

    new Mangas_model('One punch man','ONE','23','../../assets/Mangas/One-punch-man/One-Punch-Man.jpg','../../assets/Mangas/One-punch-man/one.jpg', '../../assets/Mangas/One-punch-man/onepunchman.mp4','6.95',126,1992)
]
  constructor() { }
}

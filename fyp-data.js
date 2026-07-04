// ================================================================
// ===== FYP DEFAULT DATA (SHARED UNTUK SEMUA PELAWAT WEBSITE) =====
// ================================================================
//
// PENTING: Website ni static (tiada database), jadi data yang anda
// save melalui Admin Panel HANYA tersimpan dalam browser anda sendiri.
// Untuk orang lain (email/browser/device lain) boleh nampak update
// FYP anda, ikut langkah ni:
//
// 1. Buka website, pergi tab FYP > Admin, login, lengkapkan semua
//    Project Settings & Journey Entries seperti biasa.
// 2. Klik butang "Export Data (Copy JSON)" dalam Admin Panel.
// 3. Buka fail fyp-data.js ni dalam GitHub repo anda (edit terus
//    di GitHub, atau download, edit, upload semula).
// 4. Replace SEMUA isi dalam FYP_DEFAULT_DATA = { ... } di bawah
//    dengan JSON yang anda copy tadi.
// 5. Commit & push. Lepas GitHub Pages selesai update (~1 minit),
//    semua orang akan nampak data terbaru, dari browser/email mana pun.
//
// ================================================================

const FYP_DEFAULT_DATA = 
   {
    "project": {
        "title": "Leftenan Adnan",
        "description": "A historical VR experience that enables players to experience Lieutenant Adnan's battle from two different perspectives using Unreal Engine 5.",
        "year": "2026",
        "thumbnail": "fyp/LEFTENANADNAN.png",
        "progress": 100
    },
    "entries": [
        {
            "date": "2026-03-03",
            "title": "Day 1 - Load File",
            "description": "On the first day of my Final Year Project (FYP), I focused on setting up the development environment in Unreal Engine. I successfully imported and loaded the required project files into the engine, ensuring that all assets were properly read and displayed without errors.\n\nIn addition, I began integrating the Unreal Engine plugin Meta XR Plugin to support virtual reality (VR) development. However, I encountered a compatibility issue, as the current version of Unreal Engine I was using was not supported by the Meta XR plugin.\n\nTo resolve this issue, I decided to downgrade Unreal Engine to a compatible version to ensure proper plugin integration and stable VR functionality.",
            "thumbnail": "fyp/d1/d1.1.png",
            "images": [
                "fyp/d1/d1.png"
            ],
            "captions": [
                "MetaXR"
            ]
        },
        {
            "date": "2026-03-04",
            "title": "Day 2 - Exploring",
            "description": "On the second day of my Final Year Project (FYP), I re-uploaded and reconfigured all project resources into the downgraded version of Unreal Engine to ensure compatibility with the required VR plugin.\n\nAfter successfully importing the assets, I carefully checked that all files were functioning correctly and displayed properly within the engine. I verified that there were no missing materials, broken references, or corrupted files during the migration process.\n\nIn addition, I began exploring the Unreal Engine interface and tools in more depth, including project settings, rendering options, and plugin configurations. I also tested the integration of the Meta XR Plugin to ensure it was properly recognized in the downgraded version.\n\nThis exploration helped me gain a better understanding of the workflow, asset management, and VR setup process within Unreal Engine, which will support further development in the upcoming stages of my project.",
            "thumbnail": "fyp/d2/d1.png",
            "images": [
                "fyp/d2/d1.1.png",
                "fyp/d2/d1.2.png",
                "fyp/d2/d1.3.png"
            ],
            "captions": [
                "Detailed view of the assets",
                "Detailed view of the assets",
                "MetaXR Game Mode"
            ]
        },
        {
            "date": "2026-03-31",
            "title": "AI Generate",
            "description": "",
            "thumbnail": "fyp/d3/d3.1.png",
            "images": [
                "fyp/d3/d3.2.png",
                "fyp/d3/d3.3.png",
                "fyp/d3/d3.4.png",
                "fyp/d3/d3.5.png",
                "fyp/d3/d3.6.png"
            ],
            "captions": []
        },
        {
            "date": "2026-03-31",
            "title": "Proposal",
            "description": "The FYP1 proposal has been submitted to my supervisor and has been approved with the supervisor's signature, allowing me to proceed with the project development.",
            "thumbnail": "fyp/d4/proposal.jpg",
            "images": [
                "fyp/d4/img1.png"
            ],
            "captions": [
                "Proposal Signed"
            ]
        },
        {
            "date": "2026-05-15",
            "title": "Setup POV",
            "description": "Set up the dual first-person perspective (POV) system, allowing players to experience the battlefield through the eyes of Lieutenant Adnan and his fellow soldier. Each perspective provides a unique gameplay experience, enabling players to witness the events of the war from different roles while enhancing immersion and understanding of the historical battle.",
            "thumbnail": "fyp/d5/POV.png",
            "images": [
                "fyp/d5/img1.png",
                "fyp/d5/img2.png",
                "fyp/d5/img3.png",
                "fyp/d5/img4.png",
                "fyp/d5/img5.png"
            ],
            "captions": [
                "POV Camera",
                "Sequence",
                "Sequence each Level Scene",
                "Change POV Properties",
                "Animation Sequence"
            ]
        },
        {
            "date": "2026-06-01",
            "title": "TryNError",
            "description": "Conducted trial-and-error testing to implement the camera switching system for each first-person POV animation. Configured the animation flow so that each completed POV sequence transitions seamlessly to the next level. Once the first POV animation is completed, players are given the option to select a different POV, allowing them to continue experiencing the battle from another character's perspective.",
            "thumbnail": "fyp/d6/Blueprint.png",
            "images": [
                "fyp/d6/img1.png",
                "fyp/d6/img2.png",
                "fyp/d6/img3.png",
                "fyp/d6/img4.png",
                "fyp/d6/img5.png",
                "fyp/d6/img6.png"
            ],
            "captions": [
                "Blueprint Sequence to other Sequence with different level",
                "Blueprint Sequence to other Sequence with different level (VR test)",
                "Blueprint Sequence to other Sequence with different level (VR test)",
                "Blueprint Sequence to other Sequence with different level (VR test)",
                "Blueprint Sequence to other Sequence with different level"
            ]
        },
        {
            "date": "2026-06-17",
            "title": "Met Supervisor",
            "description": "Met with my supervisor to present the completed first-person POV switching Blueprint system in Unreal Engine 5. Demonstrated the interactive functionality, allowing players to switch between different character perspectives during gameplay. Received feedback on the implementation, discussed improvements to the Blueprint logic and gameplay flow, and confirmed that the system was functioning as intended before proceeding with further development and integration into the project.",
            "thumbnail": "fyp/d7/Meet.jpg",
            "images": [
                "fyp/d7/img1.png",
                "fyp/d7/img2.png",
                "fyp/d7/img3.png",
                "fyp/d7/img4.png",
                "fyp/d7/img1.png"
            ],
            "captions": []
        },
        {
            "date": "2026-06-19",
            "title": "Discuss with the supervisor.",
            "description": "Met with my supervisor to review the current FYP report and discuss the overall project progress. During the meeting, I also presented the VR performance issue, where the application experienced lag while playing animation sequences in Unreal Engine 5. Sought the supervisor's advice on possible optimization techniques and discussed potential solutions to improve VR performance and ensure a smoother user experience during gameplay.",
            "thumbnail": "",
            "images": [
                "fyp/d8/img1.jpg",
                "fyp/d8/img2.jpg"
            ],
            "captions": []
        },
        {
            "date": "2026-06-25",
            "title": "Presentation FYP1",
            "description": "Successfully completed the FYP project and presented the final implementation to the evaluator. Demonstrated the VR application, including the first-person POV switching mechanism and overall gameplay experience. The project demo is available on YouTube: https://youtu.be/7Y-4OoH5aes.\n\nDuring the evaluation, the evaluator provided feedback and suggested an improvement to the POV switching feature. Specifically, the POV switching button should remain visible and accessible throughout the animation sequence, allowing players to switch perspectives at any time instead of waiting for the animation to finish. This enhancement will improve the user experience and provide more seamless interaction within the VR environment.",
            "thumbnail": "fyp/d9/background slides.png",
            "images": [
                "fyp/d9/alek.jpg",
                "fyp/d9/img1.jpg"
            ],
            "captions": []
        }
    ]
}

export interface App {
    id: string;
    name: string;
    version: string;
    description: string;
    tech: string[];
    apk: string;
    icon: string;
    screenshots: string[];
    category: "Security" | "Productivity";
    rating: number;
    downloads: number;
}

export const apps: App[] = [
    {
        id: "rfid-security",
        name: "RFID Security System",
        version: "1.0.0",
        description:
            "Secure RFID-based attendance system built using React Native and Node.js.",
        category: "Security",
        rating: 4.8,
        downloads: 50000,
        tech: ["React Native", "Node.js", "MongoDB"],
        apk: "https://github.com/yourusername/yourrepo/releases/download/v1/app.apk",
        icon: "https://via.placeholder.com/100",
        screenshots: [
            "https://via.placeholder.com/300x600",
            "https://via.placeholder.com/300x600"
        ]
    },
    {
        id: "task-manager",
        name: "Task Manager",
        version: "1.2.0",
        description: "Simple productivity task manager app.",
        category: "Productivity",
        rating: 4.5,
        downloads: 12000,
        tech: ["React Native"],
        apk: "https://github.com/yourusername/yourrepo/releases/download/v1/app.apk",
        icon: "https://via.placeholder.com/100",
        screenshots: [
            "https://via.placeholder.com/300x600",
            "https://via.placeholder.com/300x600"
        ]
    }
];
export const NavLinks = [
    ['Home', '/'],
    ['Dashboard', '/dashboard'],
    ['Subjects', '/subjects'],
    ['Progress', '/progress'],
]

export const DaysOfWeek = [
    {
        day: 'monday',
        progress: 86,
    },
    {
        day: 'tuesday',
        progress: 55,
    },
    {
        day: 'wednesday',
        progress: 100,
    },
    {
        day: 'thursday',
        progress: 44
    },
    {
        day: 'friday',
        progress: 72,
    },
    {
        day: 'saturday',
        progress: 36,
    },
    {
        day: 'sunday',
        progress: 15,
    }
]

export const HomeSubjects = [
    { name: 'HTML', icon: 'HTML', progress: 75, lessonsCompleted: 12, lessonCount: 16, color: 'bg-york' },
    { name: 'CSS', icon: 'CSS', progress: 64, lessonsCompleted: 9, lessonCount: 14, color: 'bg-pink' },
    { name: 'JavaScript', icon: 'JS', progress: 75, lessonsCompleted: 18, lessonCount: 24, color: 'bg-lime', active: true },
    { name: 'React', icon: '▣', progress: 35, lessonsCompleted: 7, lessonCount: 20, color: 'bg-pink' },
    { name: 'Python', icon: 'PY', progress: 28, lessonsCompleted: 5, lessonCount: 18, color: 'bg-york' },
]

export const SubjectCatalogFilters = ['All', 'HTML', 'CSS', 'JavaScript', 'React', 'Python']

export const SubjectCatalog = [
    {
        name: 'HTML',
        icon: '</>',
        description: 'Build a strong foundation in semantic HTML and accessible page structure.',
        completedLessons: 12,
        totalLessons: 16,
        progress: 75,
        color: 'bg-york',
        category: 'HTML',
        status: 'IN PROGRESS',
    },
    {
        name: 'CSS',
        icon: 'CSS',
        description: 'Create responsive layouts with modern CSS, Flexbox, and Grid.',
        completedLessons: 9,
        totalLessons: 14,
        progress: 64,
        color: 'bg-pink',
        category: 'CSS',
        status: 'IN PROGRESS',
    },
    {
        name: 'JavaScript',
        icon: 'JS',
        description: 'Learn the language of the web, from fundamentals to async code.',
        completedLessons: 18,
        totalLessons: 24,
        progress: 75,
        color: 'bg-lime',
        category: 'JavaScript',
        status: 'CONTINUE LEARNING',
    },
    {
        name: 'React',
        icon: '⚛',
        description: 'Build interactive interfaces with components, hooks, and state.',
        completedLessons: 7,
        totalLessons: 20,
        progress: 35,
        color: 'bg-pink',
        category: 'React',
        status: 'IN PROGRESS',
    },
    {
        name: 'Python',
        icon: 'PY',
        description: 'Explore Python basics, problem solving, and useful automation.',
        completedLessons: 5,
        totalLessons: 18,
        progress: 28,
        color: 'bg-york',
        category: 'Python',
        status: 'IN PROGRESS',
    },
]

export const HomePaths = [
    { title: 'Front-end foundations', detail: 'HTML, CSS and JavaScript · 32 lessons', mobileDetail: '32 lessons · Beginner', badge: 'BEGINNER · 6 WEEKS', icon: '▤', color: 'bg-lime' },
    { title: 'Build with React', detail: 'Components, hooks and APIs · 24 lessons', mobileDetail: '24 lessons · Popular', badge: 'POPULAR · 5 WEEKS', icon: '⚛', color: 'bg-pink' },
    { title: 'Python problem solving', detail: 'Python basics to automation · 38 lessons', mobileDetail: '38 lessons · Career path', badge: 'CAREER PATH · 8 WEEKS', icon: '>_', color: 'bg-york' },
]

export const HomePageData = {
    welcome: {
        date: 'Tuesday',
        desktopTag: 'Keep your momentum',
        mobileTag: 'Day 12',
        title: 'Ready to learn, Alex?',
        description: "Continue JavaScript or choose a new subject for today's session.",
        goalMinutes: 60,
        completedMinutes: 35,
        nextSessionMinutes: 25,
        streakDays: 12,
        weeklyStudyTime: '6h 40m',
    },
    currentLesson: {
        subject: 'JavaScript essentials',
        title: 'Async JavaScript and promises',
        lessonNumber: 18,
        lessonCount: 24,
        duration: '12 min lesson',
        practiceCount: 2,
        progress: 75,
    },
    progress: {
        lessonsCompleted: 2,
        experiencePoints: 240,
    },
}

export const StudyPlanSessions = [
    { subject: 'Calculus', topic: 'Integration techniques', duration: '45 min', icon: '∫', color: 'bg-lime', active: true },
    { subject: 'Modern history', topic: 'Cold War essay notes', duration: '30 min', icon: '▣', color: 'bg-pink' },
    { subject: 'Spanish', topic: 'Vocabulary review', duration: '25 min', icon: '○', color: 'bg-york' },
]

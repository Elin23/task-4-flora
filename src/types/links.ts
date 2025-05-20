export type SectionsLinks = {
    sectionName: string;
    id: string;
}
export type PagesLinks = {
    path: string;
    label: string;
    subLinks?: SectionsLinks[];
}
export type SocialLinks = {
    platform: 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'linkedin';
    url: string;
    icon: string;
}
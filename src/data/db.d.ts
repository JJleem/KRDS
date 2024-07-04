declare module "./db.json" {
  export interface Db {
    main?: {
      id: number;
      img: string;
      title: string;
      desc: string;
      desc?: string;
      sub?: string;
      badge1?: string;
      badge2?: string;
    }[];
    design?: {
      id: number;
      img: string;
      title: string;
      desc: string;
      desc?: string;
      sub?: string;
      badge1?: string;
      badge2?: string;
    }[];
    guide?: {
      id: number;
      img: string;
      title: string;
      desc: string;
      desc?: string;
      sub?: string;
      badge1?: string;
      badge2?: string;
    }[];
  }
  const db: Db;
  export default db;
}

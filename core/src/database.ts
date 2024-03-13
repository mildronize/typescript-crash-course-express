import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';

const databasePrefix = 'data';

export class Database<Entity extends object & { id: string }> {
  private databasePath: string;
  constructor(
    collectionName: string,
    protected options?: { defaultData?: Entity[] }
  ) {
    this.databasePath = path.join(databasePrefix, collectionName + '.json');
  }

  async init() {
    const defaultData = this.options.defaultData ?? [];
    if (!fsSync.existsSync(this.databasePath)) {
      await fs.mkdir(databasePrefix, { recursive: true });
      await fs.writeFile(
        this.databasePath,
        JSON.stringify(defaultData, null, 2),
        'utf8'
      );
    }
    return this;
  }

  async readAll() {
    await this.init();
    const data = await fs.readFile(this.databasePath, 'utf-8');
    return JSON.parse(data) as Entity[];
  }

  async read(id: string) {
    const data = await this.readAll();
    return data.find((item) => item.id === id);
  }

  async update(input: Entity) {
    const data = await this.readAll();
    const index = data.findIndex((item) => item.id === input.id);
    data[index] = input;
    await fs.writeFile(this.databasePath, JSON.stringify(data, null, 2));
  }

  async delete(id: string) {
    const data = await this.readAll();
    const index = data.findIndex((item) => item.id === id);
    data.splice(index, 1);
    await fs.writeFile(this.databasePath, JSON.stringify(data, null, 2));
  }

  async insert(input: Entity) {
    const data = await this.readAll();
    // Add a new change
    data.push(input);
    await fs.writeFile(this.databasePath, JSON.stringify(data, null, 2));
  }
}

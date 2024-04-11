<template>
    <header>
        <div class="content">
            <nav>
              <div class="left-side">
                <h1><a href="/">DNotes</a></h1>
                <button @click="addNewNote"><div class="plus-icon">+</div>Добавить заметку</button>
              </div>
              <div class="right-side">
                <button @click="cleanNotes" class="delete"><div class="plus-icon"><img src="/icons/trash.svg" alt="" height="18" width="18"></div>Удалить все заметки</button>
              </div>
            </nav>
        </div>
    </header>
    <main class="notes-content">
      <div class="content">
        <ul class="notes-list" v-if="notes.length > 0">
          <li class="notes" v-for="(item, index) in notes" :key="index">
            <img src="/icons/trash.svg" alt="trash" class="trash" @click="deleteNode(item)">
            <div class="top-name">
              <input class="note-name" v-model="item.name" @input="saveNotesToCache()" placeholder="Укажите название"></input>
            </div>
            <textarea class="note-desc" v-model="item.desc" @input="saveNotesToCache()" placeholder="Укажите описание"></textarea>
          </li>
        </ul>
        <div class="no-notes" v-else>
          <h1>Тут как-то пустовато ☹️</h1>
          <h2>Добавь свою первую заметку нажав на кнопку - "Добавить заметку"</h2>
          <button @click="addNewNote" class="button new"><div class="plus-icon">+</div>Добавить заметку</button>
        </div>
      </div>
    </main>
    <footer>
      <span>Made with ❤️ by DNMV</span>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      notes: [],
      nextId: 1
    };
  },
  mounted() {
    this.loadNotesFromCache();
  },
  methods: {
    addNewNote() {
      this.notes.push({id: this.nextId++, name: "", desc: "", isActive: true})
      this.saveNotesToCache() 
    },
    deleteNode( item ) {
      const indexToDelete = this.notes.indexOf(item);
      this.notes.splice(indexToDelete, 1);
      this.saveNotesToCache() 
    },
    cleanNotes() {
      this.notes = []
      this.saveNotesToCache() 
    },
    saveNotesToCache() {
      // Сохранение заметок в локальное хранилище
      localStorage.setItem('notes', JSON.stringify(this.notes));
    },
    loadNotesFromCache() {
      // Загрузка заметок из локального хранилища
      const cachedNotes = localStorage.getItem('notes');
      if (cachedNotes) {
        this.notes = JSON.parse(cachedNotes);
        // Обновление nextId, чтобы он был больше, чем максимальный id среди загруженных заметок
        this.nextId = Math.max(...this.notes.map(note => note.id), 0) + 1;
      }
    }
  },
}
</script>

<style lang="scss">
@import url('home.scss');
</style>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form>
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome" required><br><br>

      <label for="idade">Idade:</label>
      <input type="number" id="idade" name="idade" required><br><br>

      <label for="cpf">CPF:</label>
      <input type="text" id="cpf" name="cpf" pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}" required><br><br>

      <label for="cidade">Cidade:</label>
      <input type="text" id="cidade" name="cidade" required><br><br>

      <label for="estado">Estado:</label>
      <select id="estado" name="estado" required>
          <option value="">Selecione o Estado</option>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
      </select><br><br>
      <label for="teste">teste</label>
      <input name="teste" type="text"/>


      <input type="submit" value="Enviar">
    </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

import { expect } from "chai";
import { ethers } from "hardhat";

describe("Yes", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("Yes");

    const instance = await ContractFactory.deploy();
    await instance.deployed();

    expect(await instance.name()).to.equal("Yes");
  });
});

import { expect } from "chai";
import { ethers } from "hardhat";

describe("Chad", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("Chad");

    const instance = await ContractFactory.deploy();
    await instance.deployed();

    expect(await instance.name()).to.equal("Chad");
  });
});

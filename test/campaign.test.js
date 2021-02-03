const assert = require('assert');
const ganache =  require('ganache-cli');
const Web3 = require('web3')
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');

const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async ()=>{
    accounts = await web3.eth.getAccounts();
    factory = await web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from: accounts[0], gas: '1000000'});

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    [campaignAddress] = await factory.methods.getDeployedCamapigns().call();
    campaignAddress = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    )
});

describe('Campaigns', ()=>{
    it('deploys a factory and a campaign', ()=>{
        assert.ok(factory.options.address);
        assert.ok(camapign.options.address);
    });

    it('marks caller as the campaign manager', async ()=>{
        const manager = await campaignAddress.methods.manager().call();
        assert.equal(accounts[0], manager);
    });

    it('allows people to contribute money and mark them as approvers', async ()=>{
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[1]
        });
        const isContributor = await campaign.methods.approvers(accounts[1]).assert(isContributor);
    });

    it('requires a minimum contribution', async () => {
        try{
        await campaign.methods.contribute().send({
            value: '5',
            from: accounts[1]
        });
        assert(false);
    } catch (err){
        assert(err);
    }
    });

    it('allows a manager to make a payment request', async () =>{
        await campaign.methods.createRequest(
            'Buy Batteries', '100', accounts[1]
        ).send({
            from: accounts[0],
            gas: '1000000'
        });
        const request = await campaign.methods.requests(0).call();

        assert.equal('Buy Batteries', request.description);
    });

    it('processes requests', async () =>{
        
        await campaign.methods.contribute().send({from: accounts[0], value: web3.utils.toWei('100', 'ether')});

        await campaign.methods.createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1]).send({
            from: accounts[0], gas: '1000000'
        });
    });
});
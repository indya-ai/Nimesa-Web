import Banner from "@/components/common/Banner";
import AwsMarketplace from "@/components/solution/AwsMarketplace";

function index() {
  return (
    <div>
      <Banner
        title="Ransomware Protection"
        imageUrl="/assets/images/banner.svg"
      />
      <div className="bg-white md:py-[100px] py-[50px]">
        <div className="container md:text-start text-center lg:mb-16 items-center grid md:grid-cols-2 gap-4 px-2 m-auto">
          <img
            className="mx-auto"
            src="/assets/images/solution/ransomware/ransomware.svg"
          />
          <div className="lg:mx-24 md:mx-12">
            <h2 className="xl:text-[56px] text-[#212121] text-[30px] playfair-font">
              Vaulted Data Protection And Ransomware Recovery For AWS
            </h2>
          </div>
        </div>
        <div className="bg-[#F8F8F9]">
          <div className="lg:py-20 md:py-12 py-5">
            <div className="container grid items-center md:grid-cols-2 gap-[4px] px-2 m-auto">
              <div className="lg:px-[50px] md:px-[16px]">
                <h2 className="xl:text-[56px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                  Your backups must be protected
                </h2>
                <p className="text-lg text-gray">
                  Disaster Recovery isn’t just about recovering from
                  infrastructure outages. In today’s cloud connected world,
                  there are many more variables to consider to ensure
                  resilience, starting with cybersecurity. Indeed, the most
                  common cloud disasters are cyber, ransomware in particular.
                </p>
                <p className="text-[18px] text-gray my-2">
                  Disaster Recovery isn’t just about recovering from
                  infrastructure outages. In today’s cloud connected world,
                  there are many more variables to consider to ensure
                  resilience, starting with cybersecurity. Indeed, the most
                  common cloud disasters are cyber, ransomware in particular.
                </p>
              </div>
              <img src="/assets/images/solution/ransomware/protected.svg" />
            </div>
          </div>
        </div>
        <div className="lg:py-20 md:py-12 py-5">
          <div className="container grid items-center md:grid-cols-2 gap-[4px] px-2 m-auto">
            <img
              className=""
              src="/assets/images/solution/ransomware/protected.svg"
            />
            <div className="lg:px-[50px] md:px-[16px]">
              <h2 className="xl:text-[52px] md:text-[36px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                Achieving air-gapped data protection in AWS
              </h2>
              <p className="text-lg text-gray">
                If you are in AWS, there are multiple ways to deliver on the
                best practice of air-gapped data protection. As with any
                cybersecurity concern, adopting as many of these mitigations as
                possible is recommended as part of a defence in depth strategy.
                A layered approach to protection will help you to ensure that
                you are protected from the unexpected.
              </p>
              <p className="text-[18px] text-gray my-2">
                Another best practice is to leverage AWS Backup Vault Locks for
                your backups. This way, if an intruder is somehow able to access
                your recovery environment, your backups will be immutable, and
                remain resilient to malicious deletion. 
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8F9]">
          <div className="lg:py-20 md:py-12 py-5">
            <div className="container grid items-center md:grid-cols-2 gap-[4px] px-2 m-auto">
              <div className="lg:px-[50px] md:px-[16px]">
                <h2 className="xl:text-[56px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                  Infrastructure resilience is just as important
                </h2>
                <p className="text-lg text-gray">
                  We’ve talked alot about data, but what do you do about your
                  infrastructure? If your primary AWS account is compromised,
                  you won’t want to restore your data into this environment –
                  that infrastructure is compromised. Instead, you’ll need to
                  restore into a clean, and secured AWS account.
                </p>
                <p className="text-[18px] text-gray my-2">
                  Nimesa can help here too. Once you have configured Nimesa, it
                  will constantly back up and replicate not just your data, but
                  also your entire infrastructure, so that it will be ready when
                  you need it. Launching recovery into your secure, locked down
                  recovery environment is as easy as the push of a button.
                </p>
              </div>
              <img
                className="flex justify-end"
                src="/assets/images/solution/ransomware/infrastructure.svg"
              />
            </div>
          </div>
        </div>
        <div className="lg:py-20 md:py-12 py-5">
          <div className="container grid items-center md:grid-cols-2 gap-[4px] px-2 m-auto">
            <img src="/assets/images/solution/ransomware/nimesa-ransomware.svg" />
            <div className="lg:px-[50px] md:px-[16px]">
              <h2 className="xl:text-[56px] text-[30px] playfair-font py-5 md:mb-4 text-[#212121]">
                Nimesa gives you complete resilience to ransomware
              </h2>
              <p className="text-lg text-gray">
                As we have outlined – when thinking about ransomware protection
                in AWS, it’s important to consider not just your data, but your
                entire infrastructure. In both cases, Nimesa has got you
                covered.
              </p>
              <p className="text-[18px] text-gray my-2">
                Nimesa is the only solution that natively understands all of the
                AWS services that comprise your cloud environment, as well as
                their dependencies. We not only make it easy to ensure your
                backups are protected from a bad actor, but also that you can
                quickly and easily recover those backups in a clean, secure
                environment that matches your production environment.
              </p>
            </div>
          </div>
        </div>
        <AwsMarketplace />
      </div>
    </div>
  );
}

export default index;

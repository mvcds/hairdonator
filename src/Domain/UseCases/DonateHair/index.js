async function DonateHair (args, injection) {
  const { donator, patient } = args

  const hasNotifiedAboutHair = await patient.notifyAboutDonation({ donator }, injection)

  if (!hasNotifiedAboutHair) return

  injection.DonationRepo.donate(args)
}

module.exports = DonateHair
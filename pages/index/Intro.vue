<template>
  <div class="mt-10">
    <div class="flex items-center gap-4">
      <img
        src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/393756179_3641509562796398_6882327648480639246_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGRtxa5IrjbQYkgYGuO33xvgj7YXzZyMROCPthfNnIxE0ChHYvGv3GXqDN-kr7m3mMVQA6bAtzeR-5sBf237ljH&_nc_ohc=_6WqXRfilO0Q7kNvgEK1KUB&_nc_zt=24&_nc_ht=scontent.fsgn5-11.fna&_nc_gid=Ay5DaCJ3Yy4_x_wVcnyL5pp&oh=00_AYDETu80rvT4ecRLO4CkoP7oVzdehvSgKZCjqTCXxBlAmQ&oe=67158548"
        class="w-20 h-20 rounded-full object-cover"
        alt="Nguyễn Hồng Đức"
      />

      <div>
        <div class="flex items-center gap-3">
          <p class="text-xl font-bold">Nguyen Hong Duc</p>

          <UPopover :popper="{ placement: 'right' }">
            <button type="button" title="More info">
              <UIcon
                name="i-mynaui-info-circle-solid"
                class="w-4 h-4 text-[#a6a6a6] hover:text-[#8c8c8c] duration-200"
              />
            </button>

            <template #panel>
              <div class="px-3.5 py-2.5">
                <Placeholder>
                  <div class="flex flex-col gap-3">
                    <div class="flex items-center gap-2">
                      <UIcon name="i-mingcute-birthday-2-line" class="w-[18px] h-[18px] text-[#4f4f4f]" />
                      <p class="text-[#4f4f4f] font-medium mt-[3px] text-[13px]">11/12/1999</p>
                    </div>
                    <div class="flex items-center gap-2">
                      <UIcon name="i-material-symbols-home-pin-outline" class="w-[19px] h-[19px] text-[#4f4f4f]" />
                      <p class="text-[#4f4f4f] font-medium mt-[1px] text-[13px]">Cau Giay, Ha Noi</p>
                    </div>
                    <div class="flex items-center gap-2">
                      <UIcon name="i-material-symbols-call-outline" class="w-[18px] h-[18px] text-[#4f4f4f]" />
                      <p class="text-[#4f4f4f] font-medium mt-[1px] text-[13px]">0389755202</p>
                    </div>
                    <div class="flex items-center gap-2">
                      <UIcon name="i-material-symbols-mail-outline" class="w-[18px] h-[18px] text-[#4f4f4f]" />
                      <p class="text-[#4f4f4f] font-medium mt-[-1px] text-[13px]">nguyenhongduc.work@gmail.com</p>
                    </div>
                  </div>
                </Placeholder>
              </div>
            </template>
          </UPopover>
        </div>
        <p class="text-sm text-[#4A576F] mt-1">Front-End Developer</p>
      </div>
    </div>

    <div class="mt-6">
      <p class="text-[#22242C]">
        Hi, I am a frontend developer with over 4 years of experience. As a curious learner, I aspire to develop and
        contribute my skills in a professional environment.
      </p>
      <p class="text-[#22242C] mt-4">And I am also the founder of the Stormik Browser!</p>
    </div>
  </div>
</template>

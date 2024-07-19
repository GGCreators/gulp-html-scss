$(document).ready(function () {
	var q2weightfightanother = $('#q2weightfightanother')
	q2weightfightanother.parent().hide()
	var q2medicinesanother = $('#q2medicinesanother')
	q2medicinesanother.parent().hide()
	var q2weightprofitanother = $('#q2weightprofitanother')
	q2weightprofitanother.parent().hide()
	var divs = $('.show-section .steps')
	divs.hide()
	if (localStorage.getItem('pacientMailAddress') == null) {
		divs.first().show()
	} else {
		divs.eq(localStorage.getItem('question')).show()
	}
	$('.next0').click(function () {
		var email = $('#email').val()
		localStorage.setItem('pacientMailAddress', email)
		localStorage.setItem('question', 1)
		divs.eq(0).hide()
		divs.eq(1).show() // show next
	})
	$('.next1').click(function () {
		localStorage.setItem('question', 2)
		divs.eq(1).hide()
		divs.eq(2).show() // show next
	})
	$('.next2').click(function () {
		localStorage.setItem('question', 3)
		divs.eq(2).hide()
		divs.eq(3).show() // show next
	})
	$('.next3').click(function () {
		localStorage.setItem('question', 4)
		divs.eq(3).hide()
		divs.eq(4).show() // show next
	})
	$('.test').click(function () {
		localStorage.clear()
		location.reload()
	})

	// CHECKBOXES
	// PHONE
	$('#q1CheckPhone').change(function () {
		if ($(this).is(':checked')) {
			$('#q1phone').prop('disabled', false)
			$('#q1phone').val('+7 (')
		} else {
			$('#q1phone').prop('disabled', true)
			$('#q1phone').val('')
		}
	})
	$('#q1phone').mask('+7 (000) 000-00-00')
	$('#q1phone').on('input', function () {
		var currentVal = $(this).val()
		var maskedVal = '+7 ('

		// Проверка на корректное применение маски
		if (!currentVal.startsWith('+7 (')) {
			$(this).val(maskedVal)
		} else {
			// Проверка и корректировка только для исправления удаления
			var unmasked = currentVal.replace(/\D/g, '') // Убираем все нецифровые символы
			if (unmasked.length <= 11) {
				// Не более 11 цифр для формата +7 (000) 000-00-00
				$(this).val($.maskUtilities.unMask(unmasked, '+7 (000) 000-00-00'))
			}
		}
	})

	// WHATSAPP
	$('#q1CheckWhatsapp').change(function () {
		if ($(this).is(':checked')) {
			$('#q1whatsapp').prop('disabled', false)
			$('#q1whatsapp').val('+7 (')
		} else {
			$('#q1whatsapp').prop('disabled', true)
			$('#q1whatsapp').val('')
		}
	})
	$('#q1whatsapp').mask('+7 (000) 000-00-00')
	$('#q1whatsapp').on('input', function () {
		var currentVal = $(this).val()
		var maskedVal = '+7 ('

		// Проверка на корректное применение маски
		if (!currentVal.startsWith('+7 (')) {
			$(this).val(maskedVal)
		} else {
			// Проверка и корректировка только для исправления удаления
			var unmasked = currentVal.replace(/\D/g, '') // Убираем все нецифровые символы
			if (unmasked.length <= 11) {
				// Не более 11 цифр для формата +7 (000) 000-00-00
				$(this).val($.maskUtilities.unMask(unmasked, '+7 (000) 000-00-00'))
			}
		}
	})

	// TELEGRAM
	$('#q1CheckTelegram').change(function () {
		if ($(this).is(':checked')) {
			$('#q1telegram').prop('disabled', false)
		} else {
			$('#q1telegram').prop('disabled', true)
		}
	})

	// MAIL
	$('#q1CheckEmail').change(function () {
		if ($(this).is(':checked')) {
			$('#q1email').prop('disabled', false)
		} else {
			$('#q1email').prop('disabled', true)
		}
	})

	// CHECK ANOTHER WEIGHT
	$('#q2weightfight5').change(function () {
		if ($(this).is(':checked')) {
			$('#q2weightfightanother').parent().show()
		} else {
			$('#q2weightfightanother').parent().hide()
		}
	})

	//CHECK ANOTHER MEDICINES
	$('#q2medicines6').change(function () {
		if ($(this).is(':checked')) {
			$('#q2medicinesanother').parent().show()
		} else {
			$('#q2medicinesanother').parent().hide()
		}
	})

	// PSIX
	$('#q2CheckPsixEffect').change(function () {
		if ($(this).is(':checked')) {
			$('#q2psixeffect').prop('disabled', false)
		} else {
			$('#q2psixeffect').prop('disabled', true)
		}
	})

	// NO PSIX
	$('#q1CheckNoPsixEffect').change(function () {
		if ($(this).is(':checked')) {
			$('#q2psixnoeffect').prop('disabled', false)
		} else {
			$('#q2psixnoeffect').prop('disabled', true)
		}
	})

	//CHECK ANOTHER WEIGHT PROFIT
	$('#q2weightprofit5').change(function () {
		if ($(this).is(':checked')) {
			$('#q2weightprofitanother').parent().show()
		} else {
			$('#q2weightprofitanother').parent().hide()
		}
	})
})

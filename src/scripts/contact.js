$(document).ready(function () {
	// ==========================================
	// 1. Event Type Radio Button Toggle
	// ==========================================
	$('input[name="event_type"]').on("change", function () {
		$(".dynamic-section").hide();

		const selectedType = $(this).val();

		// Show the corresponding Step 1
		if (selectedType === "wedding") {
			$("#step-1-wedding").show();
		} else if (selectedType === "party") {
			$("#party-step-1").show();
		} else if (selectedType === "photoshoot") {
			$("#photoshoot-step-1").show();
		}
	});

	// =============================================
	// 2. "Next" Button Logic (Step 1 -> Step 2)
	// =============================================
	// Wedding Next
	$("#step-1-wedding .btn-next").on("click", function () {
		$("#step-1-selection").hide(); // Hide the radio buttons
		$("#step-1-wedding").hide();
		$("#step-2-wedding").show();
	});

	// Party Next
	$("#party-step-1 .btn-next").on("click", function () {
		$("#step-1-selection").hide(); // Hide the radio buttons
		$("#party-step-1").hide();
		$("#party-step-2").show();
	});

	// ============================================
	// 3. "Back" Button Logic (Step 2 -> Step 1)
	// ============================================
	// Wedding Back
	$("#step-2-wedding .btn-back").on("click", function () {
		$("#step-2-wedding").hide();
		$("#step-1-wedding").show();
		$("#step-1-selection").show();
	});

	// Party Back
	$("#party-step-2 .btn-back").on("click", function () {
		$("#party-step-2").hide();
		$("#party-step-1").show();
		$("#step-1-selection").show();
	});

	// =============================================
	// 4. "Submit" Button Logic -> Thank You Screen
	// =============================================
	$(".btn-submit").on("click", function (e) {
		e.preventDefault();

		$("#step-1-selection").hide();
		$(".dynamic-section").hide();

		$("#thank-you-screen").show();
	});

	// ============================================================
	// 5. "Home" Button Logic (Thank You Screen -> Initial State)
	// ============================================================
	$(".btn-home").on("click", function () {
		$("#thank-you-screen").hide();
		$("#step-1-selection").show();

		$('input[name="event_type"]:checked').trigger("change");
	});
});

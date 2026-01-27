/**
 * Toast Notification System
 * Lightweight, non-blocking notifications.
 */
export class ToastSystem {
    static init() {
        if (!document.getElementById('toast-container')) {
            const container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
    }

    /**
     * Show a toast notification
     * @param {string} message - Text to display
     * @param {string} type - 'info', 'success', 'warning', 'error'
     * @param {number} duration - Time in ms before auto-dismiss (default 3000)
     */
    static show(message, type = 'info', duration = 3000) {
        this.init();
        const container = document.getElementById('toast-container');

        const toast = document.createElement('div');
        toast.className = `toast-notification toast-${type} animate-slideInRight`;

        const iconMap = {
            'info': 'ℹ️',
            'success': '✅',
            'warning': '⚠️',
            'error': '❌'
        };

        toast.innerHTML = `
            <span class="toast-icon">${iconMap[type] || '📢'}</span>
            <span class="toast-msg">${message}</span>
        `;

        container.appendChild(toast);

        // Auto remove
        setTimeout(() => {
            toast.classList.replace('animate-slideInRight', 'animate-fadeOut');
            setTimeout(() => {
                if (toast.parentElement) toast.remove();
            }, 500);
        }, duration);
    }
}
